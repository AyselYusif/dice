import { createRoot } from "react-dom/client";
import Dice from "./Dice";
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(<Dice />);
