import { useSelector, useDispatch } from "react-redux";
import { change } from "../store/reducers/BT03";

export default function BT03() {
  const status = useSelector((state: any) => state.change);
  const dispatch = useDispatch();
  const changeStatus = () => {
    dispatch(change());
  };

  return (
    <div
      style={{
        width: "300px",
        height: "150px",
        border: "1px solid black",
        backgroundColor: status === false ? "white" : "black",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <button onClick={changeStatus}>
        {status === false ? "Light" : "Dark"}
      </button>
    </div>
  );
}
