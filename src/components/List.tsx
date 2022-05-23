import React, { useState, useEffect } from "react";
import TransactionForm from "./Form";
import { useAppSelector } from "../store/hook";
import { useAppDispatch } from "../store/hook";
import { deleteAccount, deleteAllAccount } from "../store/action/action";

type stateType = {
  account: string;
  amount: string;
  id: string;
  ifsc: string;
  name: string;
};

const List = () => {
  const { accounts } = useAppSelector((state: any) => state.crud);

  const dispatch = useAppDispatch();

  const [list, setList] = useState(accounts);
  const [isEdit, setIsEdit] = useState(false);

  useEffect(() => {
    accounts && accounts.length ? setList(accounts) : setList([]);
  }, [accounts]);

  //console.log(state);
  const handleEdit = (data: any) => {
    setState(data);
    setIsEdit(true);
  };

  const handleDelete = (id: string) => {
    dispatch(deleteAccount(id));
  };

  const handleClearAll = () => {
    dispatch(deleteAllAccount([]));
  };

  const [state, setState] = useState({
    account: "",
    ifsc: "",
    name: "",
    amount: "",
    id: "",
  });
  //  console.log(state.crud);
  return (
    <div>
      <TransactionForm
        state={state}
        setState={setState}
        edit={isEdit}
        isEditFalse={() => setIsEdit(isEdit)}
      />
      <hr />
      <table
        style={{
          width: "60%",
          textAlign: "center",
          marginLeft: "5%",
          border: "1px solid black",
        }}
      >
        <tbody>
          <tr style={{ borderBottom: "1px solid black", width: "100%" }}>
            <th style={{ borderLeft: "1px solid black" }}>Account No.</th>
            <th>Acc Holder Name</th>
            <th>Amount</th>
            <th>
              <button onClick={() => handleClearAll()}>Clear All</button>
            </th>
          </tr>
          {list?.map((item: stateType, index: number) => {
            return (
              <tr key={index}>
                <td>{item.account}</td>
                <td>{item.name}</td>
                <td>{item.amount}</td>
                <td>
                  <button
                    onClick={() => {
                      handleEdit(item);
                      setIsEdit(true);
                    }}
                  >
                    Edit
                  </button>
                </td>
                <td>
                  <button onClick={() => handleDelete(item.id)}>Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default List;
