import * as Styled from "./BattleResultInfo.style";

type ResultState = {
  computerInput: string;
  userInput: string;
  result: string | null;
};

type BattleResultInfoProps = {
  result: ResultState | null;
};

const BattleResultInfo = ({ result }: BattleResultInfoProps): JSX.Element => {
  return (
    <Styled.Container result={result?.result}>
      YOU: {result?.userInput}, COMPUTER: {result?.computerInput}
    </Styled.Container>
  );
};

export default BattleResultInfo;
