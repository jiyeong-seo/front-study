import styled from "styled-components";
import Colors from "~/constants/Colors";

export const Container = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 500px;
  height: 50px;

  border-radius: 6px;

  background-color: ${Colors.green96};

  & + & {
    margin-top: 20px;
  }
`;
