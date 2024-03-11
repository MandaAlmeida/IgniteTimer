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

const CountdownButton = styled.button`
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
`;

export const StartCountdownButton = styled(CountdownButton)`
  background-color: ${(props) => props.theme["green-500"]};

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  &:not(:disabled):hover {
    background-color: ${(props) => props.theme["green-700"]};
  }
`;

export const StopCountdownButton = styled(CountdownButton)`
  background-color: ${(props) => props.theme["red-500"]};

  &:hover {
    background-color: ${(props) => props.theme["red-700"]};
  }
`;
