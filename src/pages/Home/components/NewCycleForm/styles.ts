import styled from "styled-components";

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
