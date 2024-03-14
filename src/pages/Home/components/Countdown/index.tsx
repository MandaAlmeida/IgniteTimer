import { useContext, useEffect } from "react";
import { CountdownContainer, Separator } from "./styles";
import { differenceInSeconds } from "date-fns";
import { CyclesContext } from "../../../../context/CyclesContext";

export function Countdown() {
  const {
    activeCycle,
    activeCycleId,
    markCycleAsFinished,
    amountSecondsPassed,
    setSeccondsPassed,
  } = useContext(CyclesContext);

  const totalSeconds = activeCycle ? activeCycle.minutesAmount * 60 : 0;

  const currentSeconds = activeCycle ? totalSeconds - amountSecondsPassed : 0;
  const totalMinutesAmount = Math.floor(currentSeconds / 60);
  const totalSecondsAmount = currentSeconds % 60;

  const totalMinutesString = String(totalMinutesAmount).padStart(2, "0");
  const totalSecondsString = String(totalSecondsAmount).padStart(2, "0");

  useEffect(() => {
    let interval: number;

    if (activeCycle) {
      interval = setInterval(() => {
        const secondsDifference = differenceInSeconds(
          new Date(),
          activeCycle.startDate
        );
        if (secondsDifference >= totalSeconds) {
          markCycleAsFinished();
          setSeccondsPassed(totalSeconds);

          clearInterval(interval);
        } else {
          setSeccondsPassed(secondsDifference);
        }
      }, 1000);
    }
    return () => {
      clearInterval(interval);
    };
  }, [
    activeCycle,
    activeCycleId,
    totalSeconds,
    markCycleAsFinished,
    setSeccondsPassed,
    totalMinutesString,
    totalSecondsString,
  ]);

  useEffect(() => {
    if (activeCycle) {
      document.title = `Ignite Timer ${totalMinutesString}:${totalSecondsString}`;
    }
    if (!activeCycle) {
      document.title = `Ignite Timer`;
    }
  });

  return (
    <CountdownContainer>
      <span>{totalMinutesString[0]}</span>
      <span>{totalMinutesString[1]}</span>
      <Separator>:</Separator>
      <span>{totalSecondsString[0]}</span>
      <span>{totalSecondsString[1]}</span>
    </CountdownContainer>
  );
}
