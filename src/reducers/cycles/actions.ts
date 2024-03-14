import { Cycle } from "./reducer";

export enum ActionTypes {
  ADD_NEW_CYCLE = "ADD_NEW_CYCLE",
  INTERRUPT_CURRENT = "INTERRUPT_CURRENT",
  MARK_CURRENT_CYCLE_AS_FINISHED = "MARK_CURRENT-CYCLE-AS-FINISHED",
}

export function addNewCycleAction(newCycle: Cycle) {
  return {
    type: ActionTypes.ADD_NEW_CYCLE,
    payload: {
      newCycle,
    },
  };
}
export function interruptedCycleAction() {
  return {
    type: ActionTypes.INTERRUPT_CURRENT,
  };
}
export function finishedCycleAction() {
  return {
    type: ActionTypes.MARK_CURRENT_CYCLE_AS_FINISHED,
  };
}
