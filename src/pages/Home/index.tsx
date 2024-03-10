import { Minus, Play, Plus } from "@phosphor-icons/react";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { differenceInSeconds } from "date-fns";

import {
  ButtonMinutesAmountLeft,
  ButtonMinutesAmountRight,
  ContainerMinutesAmount,
  CountdownContainer,
  FormContainer,
  HomeContainer,
  MinutesAmountInput,
  Separator,
  StartCountdownButton,
  TaskInput,
} from "./styles";

interface NewCycleFormData {
  task: string;
  minutesAmount: number;
}

interface Cycle {
  id: string;
  task: string;
  minutesAmount: number;
  startDate: Date;
}

export function Home() {
  const [cycles, setCycles] = useState<Cycle[]>([]);
  const [activeCycleId, setActiveCycleId] = useState<string | null>(null);
  const [amountSecondsPassed, setAmountSecondsPassed] = useState(0);

  const { register, handleSubmit, watch, reset, setValue } =
    useForm<NewCycleFormData>({
      defaultValues: {
        task: "",
        minutesAmount: 0,
      },
    });

  const task = watch("task");
  const minutes = watch("minutesAmount");
  const isSubmitDisabled = !task;
  const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId);

  useEffect(() => {
    if (activeCycle) {
      setInterval(() => {
        setAmountSecondsPassed(
          differenceInSeconds(new Date(), activeCycle.startDate)
        );
      }, 1000);
    }
  }, [activeCycle]);

  function handleCreateNewCycle(data: NewCycleFormData) {
    const id = String(new Date().getTime());

    const newCycle: Cycle = {
      id,
      task: data.task,
      minutesAmount: data.minutesAmount,
      startDate: new Date(),
    };

    setCycles((state) => [...state, newCycle]);
    setActiveCycleId(id);

    reset();
  }

  const totalSeconds = activeCycle ? activeCycle.minutesAmount * 60 : 0;
  const currentSeconds = activeCycle ? totalSeconds - amountSecondsPassed : 0;
  const totalMinutesAmount = Math.floor(currentSeconds / 60);
  const totalSecondsAmount = currentSeconds % 60;

  const totalMinutesString = String(totalMinutesAmount).padStart(2, "0");
  const totalSecondsString = String(totalSecondsAmount).padStart(2, "0");

  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewCycle)}>
        <FormContainer>
          <label htmlFor="task">Vou trabalhar em</label>
          <TaskInput
            id="task"
            list="task-suggestions"
            placeholder="Dê um nome para o seu projeto"
            {...register("task")}
          />
          <datalist id="task-suggestions" />
          <label htmlFor="minutesAmount">durante</label>
          <ContainerMinutesAmount>
            <ButtonMinutesAmountLeft
              type="button"
              onClick={() =>
                setValue("minutesAmount", minutes > 0 ? minutes - 5 : minutes)
              }
            >
              <Minus size={24} weight="bold" />
            </ButtonMinutesAmountLeft>
            <MinutesAmountInput
              type="number"
              id="minutesAmount"
              placeholder="00"
              step={5}
              min={5}
              max={60}
              {...register("minutesAmount", { valueAsNumber: true })}
            />
            <ButtonMinutesAmountRight
              type="button"
              onClick={() =>
                setValue("minutesAmount", minutes < 60 ? minutes + 5 : minutes)
              }
            >
              <Plus size={24} weight="bold" />
            </ButtonMinutesAmountRight>
          </ContainerMinutesAmount>
          <span>minutos.</span>
        </FormContainer>
        <CountdownContainer>
          <span>{totalMinutesString[0]}</span>
          <span>{totalMinutesString[1]}</span>
          <Separator>:</Separator>
          <span>{totalSecondsString[0]}</span>
          <span>{totalSecondsString[1]}</span>
        </CountdownContainer>
        <StartCountdownButton disabled={isSubmitDisabled} type="submit">
          <Play size={24} />
          Começar
        </StartCountdownButton>
      </form>
    </HomeContainer>
  );
}
