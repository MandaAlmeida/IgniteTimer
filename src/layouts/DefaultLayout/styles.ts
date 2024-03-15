import styled from "styled-components";

export const LayoutContainer = styled.div`
  width: 90%;
  max-width: 118.4rem;
  height: calc(100vh - 16rem);
  margin: 8rem auto;
  padding: 4rem;

  border-radius: 8px;

  background: ${(props) => props.theme["gray-800"]};

  display: flex;
  flex-direction: column;
`;
