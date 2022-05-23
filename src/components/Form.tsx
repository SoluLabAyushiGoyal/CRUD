import React from "react";
import { addAccount, updateAccount } from "../store/action/action";
import { v4 as uuidv4 } from "uuid";
import { useAppDispatch } from "../store/hook";

type stateType = {
  currentIndex: number;
  list: any;
};

interface SyntheticEvent<T> {
  currentTarget: EventTarget & T;
}

const Form = (props: any) => {
  const { state, setState } = props;

  const dispatch = useAppDispatch();

  //console.log(state);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    type: string
  ): void => {
    switch (type) {
      case "account":
        setState({ ...state, account: e.target.value });
        break;
      case "ifsc":
        setState({ ...state, ifsc: e.target.value });
        break;
      case "name":
        setState({ ...state, name: e.target.value });
        break;
      case "amount":
        setState({ ...state, amount: e.target.value });
        break;
      default: {
      }
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    if (
      state.account == "" &&
      state.ifsc == "" &&
      state.name == "" &&
      state.amount == ""
    ) {
      alert("Please fill Account details");
    } else if (state.account == "") {
      alert("Account No. is missing");
      e.preventDefault();
    } else if (state.ifsc == "") {
      alert("Ifsc code is missing");
      e.preventDefault();
    } else if (state.name == "") {
      alert("Holder name is missing");
      e.preventDefault();
    } else if (state.amount == "") {
      alert("Amount");
      e.preventDefault();
    } else {
      if (props.edit) {
        e.preventDefault();
        dispatch(updateAccount({ ...state }));
        props.isEditFalse();
        console.log("is edit");
        setState({ account: "", ifsc: "", name: "", amount: "" });
      } else {
        const id = uuidv4();
        setState({ ...state, id });
        e.preventDefault();
        console.log(state);
        dispatch(addAccount({ ...state, id }));
        setState({ account: "", ifsc: "", name: "", amount: "" });
      }
    }
  };
  //console.log(state);

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <input
        name="bAccountNo"
        placeholder="Account Number"
        onChange={(e) => handleInputChange(e, "account")}
        value={state.account}
      />
      <br />
      <input
        name="iFSC"
        placeholder="IFSC"
        onChange={(e) => handleInputChange(e, "ifsc")}
        value={state.ifsc}
      />
      <br />
      <input
        name="bName"
        placeholder="A/C Holder Name"
        onChange={(e) => handleInputChange(e, "name")}
        value={state.name}
      />
      <br />
      <input
        name="amount"
        placeholder="Amount"
        onChange={(e) => handleInputChange(e, "amount")}
        value={state.amount}
      />
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
