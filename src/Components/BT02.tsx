import { useSelector, useDispatch } from "react-redux";
import { buttonRandom } from "../store/reducers/BT02";

export default function BT02() {
  const state = useSelector((state: any) => state.random);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(buttonRandom());
  };

  return (
    <div>
      <h4>{`[${state.join(", ")}]`}</h4>
      <button onClick={handleClick}>Random</button>
    </div>
  );
}
