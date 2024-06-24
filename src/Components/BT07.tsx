import { useSelector, useDispatch } from "react-redux";
import "./BT07.css";
import { changeFavorite } from "../store/reducers/BT07";

const BT07 = () => {
  const state = useSelector((state: any) => state.list);
  const dispatch = useDispatch();

  const handleChage = (id: number) => {
    dispatch(changeFavorite(id));
  };

  return (
    <div>
      <h3>List Favorite User</h3>
      {state.map((item: any) => (
        <div key={item.id} className="user-item">
          <h4>UserName: {item.name}</h4>s
          <h4>
            Favorite:{" "}
            <span
              onClick={() => handleChage(item.id)}
              style={{ color: item.favorite ? "red" : "gray" }}
              className="material-symbols-outlined"
            >
              favorite
            </span>
          </h4>
        </div>
      ))}
    </div>
  );
};

export default BT07;
