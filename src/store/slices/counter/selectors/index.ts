import { ReduxStore } from "../../../types/index";

export const selectCounterValue = (state: ReduxStore) => state.counter.value;

export {};
