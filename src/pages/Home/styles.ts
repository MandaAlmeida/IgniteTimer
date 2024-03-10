import styled from "styled-components";

export const HomeContainer = styled.main`
  flex: 1;

  display: flex;
  align-items: center;
  justify-content: center;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5.6rem;
  }
`;

export const FormContainer = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
  color: ${(props) => props.theme["gray-100"]};
  font-size: 1.8rem;
  font-weight: 700;
  flex-wrap: wrap;
`;

const BaseInput = styled.input`
  background: transparent;
  height: 4rem;
  border: 0;
  border-top: 2px solid transparent;
  border-bottom: 2px solid ${(props) => props.theme["gray-500"]};
  color: ${(props) => props.theme["gray-100"]};
  font-size: 1.8rem;
  padding: 0 0.8rem;

  &:focus {
    box-shadow: none;
    border-bottom-color: ${(props) => props.theme["green-500"]};
  }

  &::placeholder {
    color: ${(props) => props.theme["gray-500"]};
  }
`;

export const TaskInput = styled(BaseInput)`
  flex: 1;

  &::-webkit-calendar-picker-indicator {
    display: none !important;
  }
`;

export const MinutesAmountInput = styled(BaseInput)`
  width: 6.4rem;
  text-align: center;

  &::-webkit-inner-spin-button {
    appearance: none;
    margin: 0;
    &::after {
      content: "-";
    }
  }
`;

export const CountdownContainer = styled.section`
  font-family: "Roboto Mono", monospace;
  font-size: 16rem;
  line-height: 12.8rem;
  color: ${(props) => props.theme["gray-100"]};

  display: flex;
  gap: 1.6rem;
  span {
    background: ${(props) => props.theme["gray-700"]};
    padding: 3.2rem 1.6rem;
    border-radius: 8px;
  }
`;

export const Separator = styled.div`
  padding: 3.2rem 0;
  color: ${(props) => props.theme["green-500"]};
  font-weight: 700;

  width: 6.4rem;
  overflow: hidden;

  display: flex;
  justify-content: center;
`;

export const StartCountdownButton = styled.button`
  width: 100%;
  border: 0;
  padding: 2rem;
  border-radius: 8px;

  display: flex;
  align-items: center;
  justify-content: center;

  gap: 0.8rem;
  font-weight: 700;
  color: ${(props) => props.theme["gray-100"]};

  cursor: pointer;

  background-color: ${(props) => props.theme["green-500"]};

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  &:not(:disabled):hover {
    background-color: ${(props) => props.theme["green-700"]};
  }
`;

export const ContainerMinutesAmount = styled.span`
  position: relative;
`;

const ButtonMinutesAmount = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);

  background: transparent;
  border: 0;

  width: 1.6rem;
  height: 1.6rem;
  font-weight: 700;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;

  color: ${(props) => props.theme["gray-500"]};
`;

export const ButtonMinutesAmountLeft = styled(ButtonMinutesAmount)`
  left: 0;
`;

export const ButtonMinutesAmountRight = styled(ButtonMinutesAmount)`
  right: 0;
`;
