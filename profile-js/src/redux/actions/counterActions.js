export const INCREASE_COUNTER = "INCREASE_COUNTER";
export const RESET_COUNTER = "RESET_ACTIONS";

export const increaseCounter = (ammount) => {
  return {
    type: INCREASE_COUNTER,
    payload: ammount,
  };
};

export const resetCounter = () => {
  return {
    type: RESET_COUNTER,
    payload: 1,
  };
};
