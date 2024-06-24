import { useDispatch, useSelector } from "react-redux";
import { changes } from "../store/reducers/BT04";

export default function BT04() {
  const status = useSelector((state: any) => state.changes);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(changes());
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: status === false ? "column" : "row",
        gap: "20px",
      }}
    >
      <button onClick={handleClick}>
        {status === false ? "List Mode" : "Grid Mode"}
      </button>
      <div
        style={{
          width: "200px",
          height: "100px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "red",
        }}
      >
        1
      </div>
      <div
        style={{
          width: "200px",
          height: "100px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "red",
        }}
      >
        2
      </div>
      <div
        style={{
          width: "200px",
          height: "100px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "red",
        }}
      >
        3
      </div>
      <div
        style={{
          width: "200px",
          height: "100px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "red",
        }}
      >
        4
      </div>
    </div>
  );
}
