import {Routes,Route} from "react-router-dom"
import Home from "./pages/Home";
import {HOME, JENK, LOGIN, SIGNUP, TROOM, TKES, PROFILE} from "./routes";
import Navs from "./components/Navs"
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Troom from "./pages/TherapyRoom";
import RegSuccess from "./pages/RegSuccess";
import JenjangKarir from "./pages/JenjangKarir";
import TesKesehatan from "./pages/TesKesehatan";
import Profile from "./pages/Profile";

const App = () => {
  return (
    <section>
      <Navs/>
      <Routes>
        <Route element={<Home/>} path={HOME}/>
        <Route element={<Login/>} path={LOGIN}/>
        <Route element={<Signup/>} path={SIGNUP}/>
        <Route element={<Troom/>} path={TROOM}/>
        <Route element={<RegSuccess/>} path="/registrationsuccess"/>
        <Route element={<JenjangKarir/>} path={JENK}/>
        <Route element={<TesKesehatan/>} path={TKES}/>
        <Route element={<Profile/>} path={PROFILE}/>
      </Routes>
    </section>
  );
}

export default App;
