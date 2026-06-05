import { useEffect, useState } from "react";

export default function useSaveData() {
  const [saveData, setSaveData] = useState(false);

  useEffect(() => {
    const connection =
      navigator.connection ||
      navigator.mozConnection ||
      navigator.webkitConnection;

    if (!connection) {
      return undefined;
    }

    const updatePreference = () => setSaveData(Boolean(connection.saveData));

    updatePreference();
    connection.addEventListener?.("change", updatePreference);

    return () => connection.removeEventListener?.("change", updatePreference);
  }, []);

  return saveData;
}
