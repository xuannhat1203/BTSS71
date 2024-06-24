import { useSelector, useDispatch } from "react-redux";
import { toggleMenu } from "../store/reducers/BT05";
import "./Menu.css";

const Menu = () => {
  const isVisible = useSelector((state: any) => state.menu.isVisible);
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleMenu());
  };

  return (
    <div>
      <button className="menu-button" onClick={handleToggle}>
        <span className="material-symbols-outlined">search</span>
        <span className="material-symbols-outlined">home</span>
        <span className="material-symbols-outlined">settings</span>
        <span className="material-symbols-outlined">radio_button_checked</span>
      </button>
      {isVisible && (
        <div className="menu-content">
          <p>Menu Content</p>
          <div className="menu-item">
            <span className="material-symbols-outlined">search</span>
            Search
          </div>
          <div className="menu-item">
            <span className="material-symbols-outlined">home</span>
            Home
          </div>
          <div className="menu-item">
            <span className="material-symbols-outlined">settings</span>
            Settings
          </div>
          <div className="menu-item">
            <span className="material-symbols-outlined">
              radio_button_checked
            </span>
            Check Radio
          </div>
        </div>
      )}
    </div>
  );
};

export default Menu;
