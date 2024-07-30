import { NavLink } from "react-router-dom";

export default function Home() {
  return (
    <>
      <h1>Home page</h1>
      <div>
        Already have an account? <NavLink to="/signin">signin</NavLink>
        <br></br> or <NavLink to="/signup">signup</NavLink>
      </div>
    </>
  );
}
