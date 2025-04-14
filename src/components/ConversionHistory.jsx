import { Link } from "react-router-dom";
import Header from "./Header";
import Button from "./Button";
import ConversionTable from "./ConversionTable";
import Footer from "./Footer";
import { useContext } from "react";
import { ConversionsHistoryContext } from "../context/ConversionsHistoryContextDefinition";
import ErrorHandler from "./ErrorHandler";

export default function ConversionHistory() {
  let { conversionsHistory } = useContext(ConversionsHistoryContext);

  return (
    <div className="container">
      <div className="flex-grow-1">
        {conversionsHistory.length > 0 ? (
          <>
            <Header>
              <h1>Conversion History</h1>
              <p>Edit and Delete your conversions here.</p>
              <Link to={"/"}>
                <Button type={"btn-primary"}>Back To Home</Button>
              </Link>
            </Header>
            <ConversionTable />
            <Footer />
          </>
        ) : (
          <ErrorHandler
            errorTitle={"No Conversions Found"}
            errorMessage={"You have not made any conversions yet."}
          />
        )}
      </div>
    </div>
  );
}
