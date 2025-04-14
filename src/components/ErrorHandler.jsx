import { Link } from "react-router-dom";
import Button from "./Button";

export default function ErrorHandler({ errorTitle, errorMessage }) {
  return (
    <div
      style={{
        height: "100vh",
      }}
      className="container d-flex flex-column justify-content-center"
    >
      <div className="p-5 text-center rounded-3 d-flex flex-column gap-3">
        <h1 className="text-body-emphasis">{errorTitle}</h1>
        <p className="lead">{errorMessage}</p>
        <Link to="/">
          <Button type={"btn-primary"}>Back To Home Page</Button>
        </Link>
      </div>
    </div>
  );
}
