import { useState } from "react";
import { ConversionsHistoryContext } from "./ConversionsHistoryContextDefinition";

export default function ConversionsHistoryProvider({ children }) {
  const [conversionsHistory, setConversionsHistory] = useState([]);

  return (
    <ConversionsHistoryContext.Provider
      value={{
        conversionsHistory,
        setConversionsHistory: (history) => setConversionsHistory(history),
      }}
    >
      {children}
    </ConversionsHistoryContext.Provider>
  );
}
