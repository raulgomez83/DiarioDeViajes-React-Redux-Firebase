import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import validator from "validator";
import { startRegister } from "../../actions/auth";
import { removeError, setError } from "../../actions/ui";

import { useForm } from "../../hooks/useForm";

export const RegisterScreen = () => {
  const dispatch = useDispatch();
  const { msgError, loading } = useSelector((state) => state.ui);

  const [formValues, handleInputChange] = useForm({
    name: "Perico",
    email: "eldelospalotes@gmail.com",
    password: "123456",
    confirnPassword: "123456",
  });

  const { name, email, password, confirmPassword } = formValues;

  const handleRegister = (e) => {
    e.preventDefault();

    const isFormValid = () => {
      if (name.trim().length === 0) {
        dispatch(setError("Name is required"));

        return false;
      } else if (!validator.isEmail(email)) {
        dispatch(setError("Email is not valid"));

        return false;
      } else if (password !== confirmPassword || password.length < 5) {
        dispatch(
          setError(
            "Password should be at least 6 characters and match each other"
          )
        );
        return false;
      }
      dispatch(removeError());
      return true;
    };

    if (isFormValid()) {
      dispatch(startRegister(email, password, name));
    }
  };

  return (
    <div>
      <h3 className="auth__title  mb-5 ">Register</h3>
      <form
        onSubmit={handleRegister}
        className="animate__animated animate__fadeIn animate__faster"
      >
        {msgError && <div className="auth__alert-error">{msgError}</div>}
        <input
          className="auth__input"
          type="text"
          placeholder="Name"
          name="name"
          autoComplete="off"
          value={name}
          onChange={handleInputChange}
        />
        <input
          className="auth__input"
          type="text"
          placeholder="Email"
          name="email"
          autoComplete="off"
          value={email}
          onChange={handleInputChange}
        />
        <input
          className="auth__input"
          type="password"
          placeholder="Password"
          name="password"
          value={password}
          onChange={handleInputChange}
        />
        <input
          className="auth__input"
          type="password"
          placeholder="Confirm password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleInputChange}
        />
        <button
          className="btn btn-primary btn-block mt-1 mb-5"
          type="submit"
          disabled={loading}
        >
          Register
        </button>

        <Link className="link " to="/auth/login">
          Already registered? Login
        </Link>
      </form>
    </div>
  );
};
