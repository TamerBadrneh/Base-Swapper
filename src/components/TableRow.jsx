import { useContext } from "react";
import { ConversionsHistoryContext } from "../context/ConversionsHistoryContextDefinition";
import Button from "./Button";

export default function TableRow({ operation }) {
  const { conversionsHistory, setConversionsHistory } = useContext(
    ConversionsHistoryContext
  );

  let {
    operationId,
    number,
    fromBase,
    toBase,
    operationDate,
    conversionResult,
  } = operation;
  return (
    <>
      <div className="row my-3">
        <div className="col-2 mt-1">{operationId}</div>
        <div className="col mt-1">
          {number.length > 8 ? number.substr(0, 8) + "..." : number}
        </div>
        <div className="col mt-1">{fromBase}</div>
        <div className="col mt-1">{toBase}</div>
        <div className="col mt-1">{operationDate.split(",")[0]}</div>
        <div className="col mt-1">
          {conversionResult.length > 8
            ? conversionResult.substr(0, 8) + "..."
            : conversionResult}
        </div>
        <div className="col">
          <Button
            onClickHandler={() => {
              setConversionsHistory(
                conversionsHistory.filter(
                  (operation) => operation.operationId !== operationId
                )
              );
            }}
            type={"btn-danger"}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="13"
              height="13"
              fill="currentColor"
              className="bi bi-trash mb-1"
              viewBox="0 0 16 16"
            >
              <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
              <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
            </svg>
            {" Delete"}
          </Button>
        </div>
      </div>
      <hr />
    </>
  );
}
