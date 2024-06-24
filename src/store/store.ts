import { configureStore } from "@reduxjs/toolkit";
import countReducer from "../store/reducers/BT01";
import randomReducer from "../store/reducers/BT02";
import changeStatus from "./reducers/BT03";
import changeRow from "./reducers/BT04";
import menuReducer from "./reducers/BT05";
import languageReducer from "./reducers/BT06";
import listUserReducer from "./reducers/BT07";
import loginSlice from "./reducers/BT08";
export const store = configureStore({
  reducer: {
    counts: countReducer,
    random: randomReducer,
    change: changeStatus,
    changes: changeRow,
    menu: menuReducer,
    language: languageReducer,
    list: listUserReducer,
    login: loginSlice,
  },
});
