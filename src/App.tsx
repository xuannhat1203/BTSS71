import { Route, Routes } from "react-router-dom";
import BT01 from "./Components/BT01";
import BT02 from "./Components/BT02";
import BT03 from "./Components/BT03";
import BT04 from "./Components/BT04";
import BT05 from "./Components/BT05";
import BT06 from "./Components/BT06";
import BT07 from "./Components/BT07";
import BT08 from "./Components/BT08";
import BT0802 from "./Components/BT0802";

const App = () => {
  return (
    <div>
      BT01
      <BT01></BT01>
      BT02
      <BT02></BT02>
      BT03
      <BT03></BT03>
      BT04
      <BT04></BT04>
      BT05
      <BT05></BT05>
      BT06
      <BT06></BT06>
      BT07
      <BT07></BT07>
      BT08
      <Routes>
        <Route path="/login" element={<BT08 />}></Route>
        <Route path="/logout" element={<BT0802 />}></Route>
      </Routes>
    </div>
  );
};

export default App;
