import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const BT0802 = () => {
  const { name, email } = useSelector((state: any) => state.login);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/login");
  };

  return (
    <div>
      <h4>Logged in User:</h4>
      <h4>UserName: {name}</h4>
      <h4>Email: {email}</h4>
      <button onClick={handleClick}>Đăng xuất</button>
    </div>
  );
};

export default BT0802;
