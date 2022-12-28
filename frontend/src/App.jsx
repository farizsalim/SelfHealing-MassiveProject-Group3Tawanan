import {Routes,Route} from "react-router-dom"
import Home from "./pages/Home";
import {HOME, LOGIN, SIGNUP} from "./routes";
import Navs from "./components/Navs"
import Login from "./pages/Login";
import Signup from "./pages/Signup";

const App = () => {
  return (
    <section>
      <Navs/>
      <Routes>
        <Route element={<Home/>} path={HOME}/>
        <Route element={<Login/>} path={LOGIN}/>
        <Route element={<Signup/>} path={SIGNUP}/>
      </Routes>
    </section>
  );
}

export default App;
