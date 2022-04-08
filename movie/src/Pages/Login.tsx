import React, { ChangeEvent, MouseEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  let navigate = useNavigate();

  const [userName, setUserName] = useState<string>("");
  const [error, setError] = useState<string>('');

  const login = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    if (userName) {
       console.log("pass");
       navigate("/movielist");
    } else if (!userName){
      setError("Username is required");
    }
  };

  const setUserNameInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setUserName(event.target.value);
  };

  return (
    <div className="w-[480px] flex flex-col items-center  py-12 rounded mx-auto mt-[148px] bg-white drop-shadow-2xl">
      <h1><b>LOGIN</b></h1>
      <form className="mt-12 flex flex-col items-center">
        <input
          type="text"
          className="form-control border p-2 outline-[black] "
          placeholder="Username"
          value={userName}
          onChange={setUserNameInputHandler}/>

        <button
          className="border rounded drop-shadow-md block w-24 p-3 text-white text-xl mt-5 bg-[#FF496D]"
          onClick={login}  >
          submit
        </button>
      </form>
    </div>
  );
}

export default Login;
