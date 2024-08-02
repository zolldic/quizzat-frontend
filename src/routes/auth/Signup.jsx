import { Email, Password, Button } from "../../components/FormElements";
export default function Signup() {
  return (
    <>
      {/* Logo */}
      <form className="form" action="authEndPoint" method="POST">
        <Email />
        <Password />
        <Button text="sign up" />
        <h2>or sign up with</h2>
        <a href="#">google account</a>
      </form>
      <h2>
        already have an account? <a href="">sign in</a>
      </h2>
    </>
  );
}
