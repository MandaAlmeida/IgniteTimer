import { Minus, Plus } from "@phosphor-icons/react";
import {
  FormContainer,
  TaskInput,
  ContainerMinutesAmount,
  ButtonMinutesAmountLeft,
  MinutesAmountInput,
  ButtonMinutesAmountRight,
} from "./styles";
import { CyclesContext } from "../../../../context/CyclesContext";
import { useContext } from "react";
import { useFormContext } from "react-hook-form";

export function NewCycleForm() {
  const { activeCycle } = useContext(CyclesContext);

  const { register, setValue, watch } = useFormContext();

  const minutes = watch("minutesAmount");

  return (
    <FormContainer>
      <label htmlFor="task">Vou trabalhar em</label>
      <TaskInput
        id="task"
        list="task-suggestions"
        placeholder="Dê um nome para o seu projeto"
        disabled={!!activeCycle && !activeCycle.finishedData}
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
          disabled={!!activeCycle && !activeCycle.finishedData}
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
  );
}
