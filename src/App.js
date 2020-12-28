// import Login from "./components/Auth/Login/Login";
import classes from './App.module.css'
import Blogs from "./components/Blogs/Blogs";
import { LoginForm } from "./components/Auth/LoginForm/LoginForm";

function App() {
  return (
    <div className="container">
      <br></br>
      {/* <Login /> */}
      <LoginForm />
      {/* <Blogs /> */}
    </div>
  );
}

export default App;
