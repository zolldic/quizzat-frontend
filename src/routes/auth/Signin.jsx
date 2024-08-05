import { NavLink } from "react-router-dom";
import { Email, Password, Button } from "../../components/FormElements";

export default function Signin() {
  return (
    <>
      {/* Logo */}

      <h1>welcome to Quizzat</h1>
      <form className="form" action="authEndPoint" method="POST">
        <Email />
        <Password />
        <Button text="log in" />
        {/* <a href="">forget password?</a> */}
        <NavLink to="/reset">forget password?</NavLink>
        <h2>or sign in with</h2>
        <a href="#">login with google account</a>
      </form>
      <h2>
        dont have an account? <NavLink to="/signup">signup</NavLink>
      </h2>
    </>
  );
}
