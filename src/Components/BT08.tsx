import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { submitLogin } from "../store/reducers/BT08";
import { useNavigate } from "react-router-dom";

const BT08 = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({ name: "", email: "" });
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleClick = () => {
    dispatch(submitLogin(formData));
    navigate("/logout");
  };

  return (
    <div>
      <h4>Login form</h4>
      <label>Name:</label>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
      />
      <label>Email:</label>
      <input
        type="text"
        name="email"
        value={formData.email}
        onChange={handleChange}
      />
      <button onClick={handleClick}>Login</button>
    </div>
  );
};

export default BT08;
