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
        <a href="">forget password?</a>
        <h2>or sign in with</h2>
        <a href="#">login with google account</a>
      </form>
      <h2>
        dont have an account? <a href="">signup now</a>
      </h2>
    </>
  );
}
