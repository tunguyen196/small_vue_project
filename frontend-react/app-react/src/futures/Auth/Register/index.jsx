import React from "react";
import RegisterForm from "../RegisterForm";

export default function Register(props) {
  const frmSubmit = (values) => {
    console.log(values);
  };

  return <RegisterForm onSubmit={frmSubmit} />;
}
