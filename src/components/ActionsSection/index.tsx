import { Dispatch, SetStateAction } from "react";
import { useReduxDispatch } from "../../hooks/useReduxDispatch";
import {
  resetCounter,
  incrementCounter,
  decrementCounter,
  randomIncrementCounter,
} from "../../store/slices/counter";

import Button from "../Button";
import * as S from "./styles";

const ActionsSection = () => {
  const dispatch = useReduxDispatch();

  const increment = () => dispatch(incrementCounter());

  const decrement = () => dispatch(decrementCounter());

  const reset = () => dispatch(resetCounter());

  const randomIncrement = () => dispatch(randomIncrementCounter(3));

  return (
    <S.Container>
      <p>
        Vamos aprender como implementar a última versão do Redux, utilizando o
        Redux Toolkit e Typescript.
      </p>

      <div>
        <Button type="button" onClick={increment}>
          Increment
        </Button>

        <Button type="button" onClick={decrement}>
          Decrement
        </Button>

        <Button type="button" onClick={reset}>
          Reset
        </Button>
        <Button type="button" onClick={randomIncrement}>
          HandleIncrement
        </Button>
      </div>
    </S.Container>
  );
};

export default ActionsSection;
