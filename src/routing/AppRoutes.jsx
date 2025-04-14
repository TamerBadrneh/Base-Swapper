import { Route, Routes } from "react-router-dom";
import ConversionHistory from "../components/ConversionHistory";
import ErrorHandler from "../components/ErrorHandler";
import App from "../App";

export default function AppRoutes() {
  return (
    <Routes>
      <Route
        path="*"
        element={
          <ErrorHandler
            errorTitle={"404 Page Not Found"}
            errorMessage={"The Page Specified Does Not Exist..."}
          />
        }
      />
      <Route path="/" element={<App />} />
      <Route path="/history" element={<ConversionHistory />} />
    </Routes>
  );
}
