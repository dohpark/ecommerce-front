import { configureStore } from "@reduxjs/toolkit";
import { createWrapper, HYDRATE } from "next-redux-wrapper";
import {
  TypedUseSelectorHook,
  useSelector as useReduxSelector,
} from "react-redux";
import { AnyAction, combineReducers } from "redux";
import user, { UserState } from "./user";

export type State = {
  user: UserState;
};

const rootReducer = (state: State | undefined, action: AnyAction): State => {
  switch (action.type) {
    case HYDRATE:
      return {
        ...state,
        ...action.payload,
      };
    default: {
      const combineReducer = combineReducers({
        user: user.reducer,
      });
      return combineReducer(state, action);
    }
  }
};

export type RootState = ReturnType<typeof rootReducer>;

const makeStore = () => {
  const store = configureStore({
    reducer: rootReducer,
  });
  return store;
};

export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector;

export const wrapper = createWrapper(makeStore);
