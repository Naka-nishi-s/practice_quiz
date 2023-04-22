import { useEffect } from "react";
import "./App.css";
import axios from "axios";

const App = () => {
  axios.defaults.baseURL = import.meta.env.VITE_API_BASE_URL;

  // データ取得用の関数
  const showData = () => {
    // データ取得
    axios
      .get("/user")
      .then((res) => {
        console.log(res.data);
      })
      .catch((e) => {
        console.log("エラーが出てます。");
        console.log(e);
      });
  };

  // 初期データ取得
  useEffect(() => {
    console.log("Nice Judge!!");
    showData();
  }, []);

  return (
    <div className="App">
      <button onClick={showData}>Click!!</button>
    </div>
  );
};

export default App;
