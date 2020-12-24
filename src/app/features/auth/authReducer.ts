import { SIGN_IN_USER, SIGN_OUT_USER } from "./authAction";
const initalState = {
  isAuthenticated: true,
  currentUser: {
    email: "valeryghn10@gmail.com",
    photoURL: "",
  },
};

export const authReducer = (state = initalState, { type, payload }) => {
  switch (type) {
    case SIGN_IN_USER:
      return {
        ...state,
        isAuthenticated: true,
        currentUser: {
          email: payload.email,
          photoURL: "/assets/user.png",
        },
      };
    case SIGN_OUT_USER:
      return {
        ...state,
        currentUser: null,
        isAuthenticated: null,
      };
    default:
      return state;
  }
};
