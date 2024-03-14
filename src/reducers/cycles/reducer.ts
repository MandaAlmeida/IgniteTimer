export interface Cycle {
  id: string;
  task: string;
  minutesAmount: number;
  startDate: Date;
  interruptedData?: Date;
  finishedData?: Date;
}

interface CyclesState {
  cycles: Cycle[];
  activeCycleId: string | null;
}

export enum ActionTypes {
  ADD_NEW_CYCLE = "ADD_NEW_CYCLE",
  INTERRUPT_CURRENT = "INTERRUPT_CURRENT",
  MARK_CURRENT_CYCLE_AS_FINISHED = "MARK_CURRENT-CYCLE-AS-FINISHED",
}

export function CyclesReducer(state: CyclesState, action: any) {
  console.log(state);
  console.log(action);
  switch (action.type) {
    case ActionTypes.ADD_NEW_CYCLE: {
      return {
        ...state,
        cycles: [...state.cycles, action.payload.newCycle],
        activeCycleId: action.payload.newCycle.id,
      };
    }
    case ActionTypes.INTERRUPT_CURRENT: {
      return {
        ...state,
        cycles: state.cycles.map((cycle) => {
          if (cycle.id === state.activeCycleId) {
            return { ...cycle, interruptedData: new Date() };
          } else {
            return cycle;
          }
        }),
        activeCycleId: null,
      };
    }
    case ActionTypes.MARK_CURRENT_CYCLE_AS_FINISHED: {
      return {
        ...state,
        cycles: state.cycles.map((cycle) => {
          if (cycle.id === state.activeCycleId) {
            return { ...cycle, finishedData: new Date() };
          } else {
            return cycle;
          }
        }),
        activeCycleId: null,
        setTitle: false,
      };
    }

    default:
      return state;
  }
}
