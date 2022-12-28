import logo from "./logo.svg";
import "./App.css";
import { Link, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
        <div className="main">
          <Link to={"/templates"} className={"btn"}>
            Примеры работ
          </Link>
          <Link to={"/about"} className={"btn"}>
            О себе
          </Link>
          <Link to={"/сontacts"} className={"btn"}>
            Контактная информация
          </Link>
        </div>
        <div className="main">
          <Routes>
            <Route
              path="/templates"
              element={
                <div>
                  Примеры моих работ можно увидеть
                </div>
              }
            />
            <Route
              path="/about"
              element={<div>О себе: 1C разработчик</div>}
            />
            <Route
              path="/сontacts"
              element={
                <div>
                  Номер: +123
                </div>
              }
            />
          </Routes>
        </div>
    </div>
  );
}

export default App;
