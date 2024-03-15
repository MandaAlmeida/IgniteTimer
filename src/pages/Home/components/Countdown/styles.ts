import { styled } from "styled-components";

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

  @media (max-width: 768px) {
    gap: 1rem;
    font-size: 10rem;
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

  @media (max-width: 768px) {
    width: 3rem;
  }
`;
