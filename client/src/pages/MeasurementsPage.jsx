import { useState, useEffect } from "react";
import { api } from "../services/api";

export default function MeasurementsPage() {
  const [measurements, setMeasurements] = useState([]);
  const [methods, setMethods] = useState([]);

  useEffect(() => {
    (async () => {
      await api("methods").then((methods) => setMethods(methods));
      await api("measurements").then((measurements) =>
        setMeasurements(measurements)
      );
    })();
  }, []);

  const type = ["Weight", "Systolic pressure", "Diastolic pressure"];

  return (
    <div>
      <h1>Create Measurement</h1>
      <form>
        <label>Measurement:</label>
        <select>
          {type.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
        <label>Method:</label>
        <select>
          {methods.map((method) => (
            <option key={method.id} value={method.id}>
              {method.name}
            </option>
          ))}
        </select>

        <label>Value:</label>
        <input type="text" name="value" />

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Create
        </button>
      </form>
    </div>
  );
}
