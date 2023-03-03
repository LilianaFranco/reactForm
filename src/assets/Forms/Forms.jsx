import React from "react";
import { useState } from "react";

export const Forms = () => {
  //onChange

  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChangeName = (e) => {
    setData({ ...data, name: e.target.value });
  };

  const handleChangeEmail = (e) => {
    setData({ ...data, email: e.target.value });
  };

  const handleChangePassword = (e) => {
    setData({ ...data, password: e.target.value });
  };

  //Validations

  const validateName = (str) => {
    const noEmptyCharacter = str.trim();
    console.log(noEmptyCharacter);
    if (noEmptyCharacter.length > 3 && str === noEmptyCharacter) {
      return true;
    } else {
      return false;
    }
  };

  const validateUserName = (str) => {
    const noEmptyCharacter = str.trim();
    console.log(noEmptyCharacter);
    if (noEmptyCharacter.length > 2 && str === noEmptyCharacter) {
      return true;
    } else {
      return false;
    }
  };

  const validatePassword = (str) => {
    const noEmptyCharacter = str.trim();
    console.log(noEmptyCharacter);
    if (noEmptyCharacter.length > 5 && str === noEmptyCharacter) {
      return true;
    } else {
      return false;
    }
  };

  //This is the last step. It should go after validations
  const handleSubmit = (e) => {
    e.preventDefault();
    const isNameValid = validateName(data.name);
    const isEmailValid = validateUserName(data.email);
    const isPasswordValid = validatePassword(data.password);
    if (!isEmailValid || !isNameValid || !isPasswordValid) {
      alert("Alguno de los datos es incorrecto");
    } else {
      alert(
        `Hola, ${data.name}. Tu email es ${data.email} y tu contraseña es ${data.password}`
      );
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="userName" onChange={handleChangeName} />
        <input type="text" name="userEmail" onChange={handleChangeEmail} />
        <input
          type="text"
          name="userPassword"
          onChange={handleChangePassword}
        />
        <button type="submit">Ingresar</button>
      </form>
    </div>
  );
};
