import { useState } from "react";
import Footer from "./components/Footer";
import Form from "./components/Form";
import Header from "./components/Header";
import ResultCard from "./components/ResultCard";

export default function App() {
  const [currentOperation, setCurrentOperation] = useState({
    operationId: "",
    number: "",
    fromBase: "",
    toBase: "",
    conversionResult: "",
    operationDate: "",
  });

  return (
    <main
      className="row "
      style={{
        height: "100vh",
        width: "100vw",
      }}
    >
      <div className={"container col-9 d-flex flex-column"}>
        <div
          style={{
            width: "70%",
            margin: "auto",
          }}
          className="flex-grow-1"
        >
          <Header>
            <h1>
              Base <span className="text-primary">Swapper</span>
            </h1>
            <p>
              Seamless Number Base Conversion – Effortless Binary, Decimal & Hex
              Translations! <br />
              Made with love by{" "}
              <a href="https://www.linkedin.com/in/tamer-badarneh/">
                Tamer Badarneh
              </a>
            </p>
          </Header>
          <Form
            getOperationResult={(operation) => setCurrentOperation(operation)}
          />
          {currentOperation.conversionResult && (
            <ResultCard operation={currentOperation} />
          )}
        </div>
        <Footer />
      </div>
    </main>
  );
}
