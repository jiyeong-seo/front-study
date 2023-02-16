import styled from "styled-components";
import Colors from "~/constants/Colors";

type Result = {
  result: string | null | undefined;
};

export const Container = styled.p<Result>`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 500px;
  height: 50px;

  border-radius: 6px;

  background-color: ${({ result }) => {
    switch (result) {
      case "Win":
        return Colors.green96;
      case "Draw":
        return Colors.greyf7;
      case "Lose":
        return Colors.redff;
      default:
        break;
    }
  }};
  & + & {
    margin-top: 20px;
  }
`;
