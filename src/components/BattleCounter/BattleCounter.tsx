import BattleChoice from "./BattleChoice";
import * as Styled from "./BattleCounter.style";
import Hearts from "./Hearts";
import { useEffect } from "react";
import { HandPaper, HandRock, HandScissors, Question } from "@images/index";

type ResultState = {
  computerInput: string;
  userInput: string;
  result: string | null;
};

type InputValuesState = {
  user: { input: string | null; image: string | null };
  computer: { input: string | null; image: string | null };
};

type StartState = {
  isStart: boolean;
  isReStart: boolean;
  reset: boolean;
};

type BattleCounterProps = {
  activeLife: number;
  isComputer?: boolean;
  remainingTime?: number;
  inputValues: InputValuesState;
  setRoundResult: React.Dispatch<React.SetStateAction<ResultState>>;
  setInputValues: React.Dispatch<React.SetStateAction<InputValuesState>>;
  setStart: React.Dispatch<React.SetStateAction<StartState>>;
  start: StartState;
};

const BattleCounter = ({
  activeLife,
  isComputer = false,
  remainingTime,
  inputValues,
  setRoundResult,
  setInputValues,
  setStart,
  start,
}: BattleCounterProps): JSX.Element => {
  /** Results change function */
  const setResult = (
    computerInput: string,
    userInput: string,
    result: string
  ) => {
    // Round 결과
    setRoundResult((prev) => {
      return {
        ...prev,
        computerInput,
        userInput,
        result,
      };
    });
  };

  /** 컴퓨터 가위바위보 선택 결과 출력 */
  useEffect(() => {
    if (inputValues?.computer.input && start.isStart) {
      if (inputValues?.user.input === "가위") {
        if (inputValues?.computer.input === "보!") {
          setResult("paper", "scissors", "Win");
        } else if (inputValues?.computer.input === "가위") {
          setResult("scissors", "scissors", "Draw");
        } else {
          setResult("rock", "scissors", "Lose");
        }
      } else if (inputValues?.user.input === "바위") {
        if (inputValues?.computer.input === "가위") {
          setResult("sicssors", "rock", "Win");
        } else if (inputValues?.computer.input === "바위") {
          setResult("rock", "rock", "Draw");
        } else {
          setResult("paper", "rock", "Lose");
        }
      } else {
        if (inputValues?.computer.input === "바위") {
          setResult("rock", "paper", "Win");
        } else if (inputValues?.computer.input === "보") {
          setResult("paper", "paper", "Draw");
        } else {
          setResult("sicssors", "paper", "Lose");
        }
      }
      setStart((prev) => {
        return { ...prev, isStart: false };
      });
    }
  }, [inputValues, start.isReStart]);

  /** 타이머 종료시 컴퓨터 랜덤 가위바위보 실행 */
  useEffect(() => {
    if (remainingTime === 0) {
      let randomNumber = Math.random();

      if (randomNumber < 0.33) {
        setInputValues((prev) => {
          return { ...prev, computer: { image: HandScissors, input: "가위" } };
        });
      } else if (randomNumber < 0.66) {
        setInputValues((prev) => {
          return { ...prev, computer: { image: HandRock, input: "바위" } };
        });
      } else {
        setInputValues((prev) => {
          return { ...prev, computer: { image: HandPaper, input: "보" } };
        });
      }
    }
  }, [remainingTime, setInputValues]);

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
        // : 초기 상태에서는 You도 Question props가 전달되어야 한다
        src={
          isComputer
            ? inputValues?.computer?.image
              ? inputValues?.computer?.image
              : Question
            : inputValues?.user?.image
            ? inputValues?.user?.image
            : Question
        }
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
        inputValues?.computer?.input ? (
          inputValues?.computer?.input
        ) : (
          "생각중..."
        )
      ) : (
        <BattleChoice setInputValues={setInputValues} />
      )}
    </Styled.Container>
  );
};

export default BattleCounter;
