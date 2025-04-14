import TableHeader from "./TableHeader";
import TableRow from "./TableRow";
import { useContext } from "react";
import { ConversionsHistoryContext } from "../context/ConversionsHistoryContextDefinition";

export default function ConversionTable() {
  let { conversionsHistory } = useContext(ConversionsHistoryContext);

  return (
    <main
      style={{
        width: "100%",
        margin: "auto",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
      className="container text-center mt-5"
    >
      <div className="flex-grow-1">
        <TableHeader />
        {conversionsHistory.map((operation) => (
          <TableRow key={operation.operationId} operation={operation} />
        ))}
      </div>
    </main>
  );
}
