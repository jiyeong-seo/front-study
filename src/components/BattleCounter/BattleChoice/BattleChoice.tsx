import * as Styled from "./BattleChoice.style";
import { HandPaper, HandRock, HandScissors } from "@images/index";

type InputValues = {
  user: { input: string | null; image: string | null };
  computer: { input: string | null; image: string | null };
};

type BattleChoiceProps = {
  setInputValues: React.Dispatch<React.SetStateAction<InputValues>>;
};

const BattleChoice = ({ setInputValues }: BattleChoiceProps): JSX.Element => {
  return (
    <Styled.Container>
      <Styled.RadioWrapper>
        <input
          onClick={() => {
            setInputValues((prev) => {
              return { ...prev, user: { image: HandScissors, input: "가위" } };
            });
          }}
          name="battle-choice"
          id="battle-choice-scissors"
          type="radio"
          value="가위"
        />
        <label htmlFor="battle-choice-scissors">가위</label>
      </Styled.RadioWrapper>

      <Styled.RadioWrapper>
        <input
          onClick={() => {
            setInputValues((prev) => {
              return { ...prev, user: { image: HandRock, input: "바위" } };
            });
          }}
          name="battle-choice"
          id="battle-choice-rock"
          type="radio"
          value="바위"
        />
        <label htmlFor="battle-choice-rock">바위</label>
      </Styled.RadioWrapper>

      <Styled.RadioWrapper>
        <input
          onClick={() => {
            setInputValues((prev) => {
              return { ...prev, user: { image: HandPaper, input: "보" } };
            });
          }}
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
