import { ActionTypes } from "./actions";
import { produce } from "immer";

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

export function CyclesReducer(state: CyclesState, action: any) {
  switch (action.type) {
    case ActionTypes.ADD_NEW_CYCLE: {
      return produce(state, (draft) => {
        draft.cycles.push(action.payload.newCycle);
        draft.activeCycleId = action.payload.newCycle.id;
      });
    }
    case ActionTypes.INTERRUPT_CURRENT: {
      const currentCycleIndex = state.cycles.findIndex((cycle) => {
        return cycle.id === state.activeCycleId;
      });
      if (currentCycleIndex < 0) {
        return state;
      } else {
        return produce(state, (draft) => {
          draft.activeCycleId = null;
          draft.cycles[currentCycleIndex].interruptedData = new Date();
        });
      }
    }
    case ActionTypes.MARK_CURRENT_CYCLE_AS_FINISHED: {
      const currentCycleIndex = state.cycles.findIndex((cycle) => {
        return cycle.id === state.activeCycleId;
      });
      if (currentCycleIndex < 0) {
        return state;
      } else {
        return produce(state, (draft) => {
          draft.activeCycleId = null;
          draft.cycles[currentCycleIndex].finishedData = new Date();
        });
      }
    }

    default:
      return state;
  }
}
