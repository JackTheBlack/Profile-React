import { INCREASE_COUNTER, RESET_COUNTER } from "../actions/counterActions.js";

const initialState = {
  count: 1,
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREASE_COUNTER:
      return {
        ...state,
        count: state.count + action.payload,
      };
    case RESET_COUNTER:
      return {
        ...state,
        count: 1,
      };

    default:
      return state;
  }
};
export default counterReducer;
