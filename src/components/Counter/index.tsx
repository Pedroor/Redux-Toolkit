import { useCallback } from "react";
import { useReduxSelector } from "../../hooks/useReduxSelector";
import { selectCounterValue } from "../../store/slices/counter/selectors";
import * as S from "./styles";

const Counter = () => {
  const counter = useReduxSelector(
    useCallback(state => state.counter.value, [])
  );

  const counterTest = useReduxSelector(selectCounterValue);

  return <S.Container>{`${counter}`.padStart(2, "0")}</S.Container>;
};

export default Counter;
