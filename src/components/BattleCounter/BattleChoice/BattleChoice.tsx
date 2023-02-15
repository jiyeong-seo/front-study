import * as Styled from "./BattleChoice.style";
import { HandPaper, HandRock, HandScissors } from "@images/index";

type Input = {
  input: string | null;
  image: string | null;
};

type InputValues = {
  user: { input: string | null; image: string | null };
  computer: { input: string | null; image: string | null };
};

type BattleChoiceProps = {
  setUserInput: React.Dispatch<React.SetStateAction<Input | null>>;
  setInputValues: React.Dispatch<React.SetStateAction<InputValues>>;
};

const BattleChoice: React.FC<BattleChoiceProps> = ({
  setUserInput,
  setInputValues,
}) => {
  return (
    <Styled.Container>
      <Styled.RadioWrapper
        onClick={() => {
          setUserInput(() => {
            return { image: HandScissors, input: "가위" };
          });
          setInputValues((prev) => {
            return { ...prev, user: { image: HandScissors, input: "가위" } };
          });
        }}
      >
        <input
          name="battle-choice"
          id="battle-choice-scissors"
          type="radio"
          value="가위"
        />
        <label htmlFor="battle-choice-scissors">가위</label>
      </Styled.RadioWrapper>

      <Styled.RadioWrapper
        onClick={() => {
          setUserInput(() => {
            return { image: HandRock, input: "바위" };
          });
          setInputValues((prev) => {
            return { ...prev, user: { image: HandRock, input: "바위" } };
          });
        }}
      >
        <input
          name="battle-choice"
          id="battle-choice-rock"
          type="radio"
          value="바위"
        />
        <label htmlFor="battle-choice-rock">바위</label>
      </Styled.RadioWrapper>

      <Styled.RadioWrapper
        onClick={() => {
          setUserInput(() => {
            return { image: HandPaper, input: "보" };
          });
          setInputValues((prev) => {
            return { ...prev, user: { image: HandPaper, input: "보" } };
          });
        }}
      >
        <input
          name="battle-choice"
          id="battle-choice-paper"
          type="radio"
          value="보"
        />
        <label htmlFor="battle-choice-paper">보</label>
      </Styled.RadioWrapper>
    </Styled.Container>
  );
};

export default BattleChoice;
