import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routing/AppRoutes.jsx";
import ConversionsHistoryProvider from "./context/ConversionsHistoryContext.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ConversionsHistoryProvider>
      <AppRoutes />
    </ConversionsHistoryProvider>
  </BrowserRouter>
);
