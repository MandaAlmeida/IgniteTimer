import {
  ReactNode,
  createContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { Cycle, CyclesReducer } from "../reducers/cycles/reducer";
import {
  addNewCycleAction,
  finishedCycleAction,
  interruptedCycleAction,
} from "../reducers/cycles/actions";
import { differenceInSeconds } from "date-fns";

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
  const [cyclesStates, dispatch] = useReducer(
    CyclesReducer,
    {
      cycles: [],
      activeCycleId: null,
    },
    (initialState) => {
      const storedStateAsJSON = localStorage.getItem(
        "@ignite-timer:cycles-states-1.0.0"
      );

      if (storedStateAsJSON) {
        return JSON.parse(storedStateAsJSON);
      }

      return initialState;
    }
  );
  const { cycles, activeCycleId } = cyclesStates;
  const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId);

  const [amountSecondsPassed, setAmountSecondsPassed] = useState(() => {
    if (activeCycle) {
      return differenceInSeconds(new Date(), new Date(activeCycle.startDate));
    }
    return 0;
  });

  useEffect(() => {
    const stateJSON = JSON.stringify(cyclesStates);

    localStorage.setItem("@ignite-timer:cycles-states-1.0.0", stateJSON);
  }, [cyclesStates]);

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
