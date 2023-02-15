import BattleChoice from "./BattleChoice";
import * as Styled from "./BattleCounter.style";
import Hearts from "./Hearts";
import { useState, useEffect } from "react";
import { HandPaper, HandRock, HandScissors, Question } from "@images/index";

type BattleCounterProps = {
  activeLife: number;
  isComputer?: boolean;
  remainingTime?: number;
};

type ComputerInput = {
  input: string | null;
  image: string | null;
};

const BattleCounter = ({
  activeLife,
  isComputer = false,
  remainingTime,
}: BattleCounterProps) => {
  /** 지영:가위/바위/보 state */
  const [userInput, setUserInput] = useState<string | null>(null);
  /** 지영:Computer state */
  const [computerInput, setComputerInput] = useState<ComputerInput>({
    input: null,
    image: null,
  });
  console.log("computerInput =>", computerInput);

  /** 지영: 타이머 종료시 컴퓨터 랜덤 가위바위보 실행 Hook */
  useEffect(() => {
    if (remainingTime === 0) {
      let randomNumber = Math.random();

      if (randomNumber < 0.33) {
        setComputerInput(() => {
          return { image: HandScissors, input: "가위" };
        });
      } else if (randomNumber < 0.66) {
        setComputerInput(() => {
          return { image: HandRock, input: "바위" };
        });
      } else {
        setComputerInput(() => {
          return { image: HandPaper, input: "보" };
        });
      }
    }
  }, [remainingTime]);

  return (
    <Styled.Container>
      {/*
       * TODO: 가위 / 바위 / 보 State 관리
       *
       * BattleChoice에서 선택한 선택지가 반영되어 이미지가 변경되어야 합니다.
       * 아무것도 선택하지 않는 초기 상태에서는 You도 Question props가 전달되어야 합니다.(=이미지가 물음표여야 합니다.)
       * TODO: 컴퓨터의 랜덤한 선택
       *
       * 컴퓨터는 카운트다운이 끝나면 컴퓨터가 고른 랜덤한 선택지가 컴퓨터 파트에 보여져야 합니다.
       */}
      <Styled.BattleChoiceImg
        // 지영: 초기 상태에서는 You도 Question props가 전달되어야 한다
        src={
          isComputer
            ? computerInput.image
              ? computerInput.image
              : Question
            : userInput
            ? userInput
            : Question
        }
        // 지영: state 전달시 해당 값으로 변경되게 하면 좋을듯?
        alt="가위바위보 이미지"
      />

      <Styled.CounterName>{isComputer ? "Computer" : "YOU"}</Styled.CounterName>
      <Hearts activeLife={activeLife} />
      {/*
       * TODO: 컴퓨터의 랜덤한 선택
       *
       * 컴퓨터의 선택 결과가 "생각중..." 이라는 텍스트에서 바뀌어서 보여야 합니다.
       * 가위 / 바위 / 보 중 하나가 결과로 보여져야 합니다.
       * 재대결 버튼을 클릭하게 되면 다시 `생각중...` 으로 보여져야 합니다.
       */}
      {isComputer ? (
        computerInput.input ? (
          computerInput.input
        ) : (
          "생각중..."
        )
      ) : (
        <BattleChoice setUserInput={setUserInput} />
      )}
    </Styled.Container>
  );
};

export default BattleCounter;
