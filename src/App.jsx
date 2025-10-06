import { useYandexMetrika } from "stores/useYandexMetrika";
import "./index.css";

function App(props) {
  useYandexMetrika();

  return <>{props.children}</>;
}

export default App;
