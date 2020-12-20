import { combineReducers } from "redux";
import testReducer from "../sandBox//testReducer";
import { eventReducer } from "../features/events/eventReducer";
//import { ModalReducer } from "../modals/ModalReducer";

const rootReducer = combineReducers({
  test: testReducer,
  event: eventReducer,
  //modal: ModalReducer,
});
export default rootReducer;
