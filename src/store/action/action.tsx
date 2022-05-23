import { createAsyncThunk } from "@reduxjs/toolkit";

export const addAccount = createAsyncThunk(
  "account/add",
  async (
    action: any,
    { dispatch, getState, rejectWithValue, fulfillWithValue }
  ) => {
    console.log("addAccount", action);
    return action;
  }
);
//type getState = {crud : any}
export const deleteAccount = createAsyncThunk(
  "account/delete",
  async (
    action: any,
    { dispatch, getState, rejectWithValue, fulfillWithValue }
  ) => {
    const { crud } = getState() as { crud: { accounts: [] } };

    //console.log(getState(), action);
    const constant = crud?.accounts?.filter((item: any) => item.id !== action);
    console.log(constant);
    return constant;
    //return action;
  }
);

export const updateAccount = createAsyncThunk(
  "account/update",
  async (
    action: any,
    { dispatch, getState, rejectWithValue, fulfillWithValue }
  ) => {
    return action;
  }
);

export const deleteAllAccount = createAsyncThunk(
  "account/deleteAll",
  async (
    action: any,
    { dispatch, getState, rejectWithValue, fulfillWithValue }
  ) => {
    return action;
  }
);
