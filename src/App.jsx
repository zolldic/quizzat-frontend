import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

// routes
import Home from "./routes/Home";

function Dashboard() {
  return <h1>Dashboard page</h1>;
}

function Signup() {
  return <h1>Signup page</h1>;
}

const Base = "quizzat-frontend";
function Signin() {
  return <h1>Signin page</h1>;
}

function App() {
  return (
    <>
      <BrowserRouter>
        <main>
          <Routes>
            <Route index element={<Home />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </main>
      </BrowserRouter>
    </>
  );
}

export default App;
