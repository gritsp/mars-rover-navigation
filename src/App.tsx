import { useState } from "react";
import { NavigationService } from "./services/navigation";
const marsRoverNavigator = new NavigationService();
interface TableComponentProps {
  data: string[][];
}

const TableComponent: React.FC<TableComponentProps> = ({ data }) => {
  return (
    <table>
      <thead>
        <tr>
          <th> Y \ X</th>
          {data[0].map((_, colIndex) => (
            <th key={colIndex}>{colIndex + 1}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <tr key={rowIndex}>
            <td>{rowIndex + 1}</td>
            {row.map((item, colIndex) => (
              <td key={colIndex}>{item}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

function App() {
  const [inputText, setInputText] = useState("");
  const [finalText, setFinalText] = useState("");
  const [status, setStatus] = useState("");

  if (finalText && finalText.length > 0) {
    console.log("finalText: ", finalText.split("").length);
    finalText.split("").forEach((move) => {
      const newStatus = marsRoverNavigator.navigateRover(move);
      console.log({ newStatus });
      setStatus(newStatus as string);
    });
    setFinalText("");
  }

  const handleClick = () => {
    setFinalText(inputText);
    setInputText("");
  };

  return (
    <div>
      <h1>Mars rover navigator</h1>
      <div>Move: {inputText}</div>
      <div>Status: {status}</div>
      <TableComponent data={marsRoverNavigator.getGrid()} />
      <input
        type="text"
        placeholder="Enter move"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <button onClick={handleClick}>Insert move</button>
    </div>
  );
}

export default App;
