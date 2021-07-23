import React, { useState } from "react";
import useInput from "./hooks/useInput";

const UserForm = () => {
  const [firstName, bindFistName, resetFirstName] = useInput('')
  const [lastName, bindLastName, resetLasttName] = useInput('')
  const submitHandler = e => {
      e.preventDefault()
      alert(`Hello ${firstName} ${lastName}`)
      resetFirstName()
      resetLasttName()
  }
  return (
    <div>
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor="">Fist Name</label>
          <input
            type="text"
            {...bindFistName}
          />
        </div>
        <div>
          <label htmlFor="">Last Name</label>
          <input
            type="text"
            {...bindLastName}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default UserForm;
