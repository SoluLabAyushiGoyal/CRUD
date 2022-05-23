import { createReducer } from "@reduxjs/toolkit";
import {
  addAccount,
  deleteAccount,
  updateAccount,
  deleteAllAccount,
} from "../action/action";

const initialState = { accounts: [] };
export const cartSlice = createReducer(initialState, (builder) => {
  builder
    .addCase(addAccount.fulfilled, (state, action: any) => {
      state.accounts.push(action.payload);
    })
    .addCase(deleteAccount.fulfilled, (state, action: any) => {
      state.accounts = action.payload;
    })
    .addCase(updateAccount.fulfilled, (state, action: any) => {
      state.accounts.map((item, index) => {
        if (item.id == action.payload.id) {
          state.accounts[index] = action.payload;
        }
      });
    })

    .addCase(deleteAllAccount.fulfilled, (state, action: any) => {
      state.accounts = action.payload;
    });
});
