const INCREASE_COUNTER = "INCREASE_COUNTER";
const DECREASE_COUNTER = "DECREASE_COUNTER";
const initialState = {
  data: 389,
};
export const increase = (amount:number) => {
  return {
    type: INCREASE_COUNTER,
    payload: amount,
  };
};
export const decrease = (amount:number) => {
  return {
    type: DECREASE_COUNTER,
    payload: amount,
  };
};
const testReducer = (state = initialState, action:any) => {
  switch (action.type) {
    case INCREASE_COUNTER:
      return {
        ...state,
        data: state.data + action.payload,
      };
    case DECREASE_COUNTER:
      return {
        ...state,
        data: state.data - action.payload,
      };

    default:
      return state;
  }
};

export default testReducer;