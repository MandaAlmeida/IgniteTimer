import { ReactNode, createContext, useReducer, useState } from "react";
import { Cycle, CyclesReducer } from "../reducers/cycles/reducer";
import {
  addNewCycleAction,
  finishedCycleAction,
  interruptedCycleAction,
} from "../reducers/cycles/actions";

interface CreateCycleData {
  task: string;
  minutesAmount: number;
}

interface CycleContextProps {
  cycles: Cycle[];
  activeCycle: Cycle | undefined;
  activeCycleId: string | null;
  markCycleAsFinished: () => void;
  amountSecondsPassed: number;
  setSeccondsPassed: (seconds: number) => void;
  createNewCycle: (data: CreateCycleData) => void;
  handleInterruptCycle: () => void;
}

export const CyclesContext = createContext({} as CycleContextProps);

interface CyclesContextProviderProps {
  children: ReactNode;
}

export function CyclesContextProvider({
  children,
}: CyclesContextProviderProps) {
  const [cyclesStates, dispatch] = useReducer(CyclesReducer, {
    cycles: [],
    activeCycleId: null,
  });

  const [amountSecondsPassed, setAmountSecondsPassed] = useState(0);

  const { cycles, activeCycleId } = cyclesStates;

  const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId);

  function setSeccondsPassed(seconds: number) {
    setAmountSecondsPassed(seconds);
  }

  function markCycleAsFinished() {
    dispatch(finishedCycleAction());
  }

  function createNewCycle(data: CreateCycleData) {
    const id = String(new Date().getTime());

    const newCycle: Cycle = {
      id,
      task: data.task,
      minutesAmount: data.minutesAmount,
      startDate: new Date(),
    };

    dispatch(addNewCycleAction(newCycle));
    setAmountSecondsPassed(0);
  }

  function handleInterruptCycle() {
    dispatch(interruptedCycleAction());
  }

  return (
    <CyclesContext.Provider
      value={{
        cycles,
        activeCycle,
        activeCycleId,
        markCycleAsFinished,
        amountSecondsPassed,
        setSeccondsPassed,
        createNewCycle,
        handleInterruptCycle,
      }}
    >
      {children}
    </CyclesContext.Provider>
  );
}
