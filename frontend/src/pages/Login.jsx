import { bglogin } from "../image";
import {Container} from "react-bootstrap"
import "./Login.css"
import { NavLink,useNavigate } from "react-router-dom";
import { SIGNUP } from "../routes";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import axios from "axios";
import { useEffect,useState } from "react";
import Loading from "../components/Loading";

const Login = () =>{
    const [loading,setLoading] = useState(true)
    useEffect(() => {
        window.scrollTo(0, 0)
        const timer = setTimeout(() => setLoading(false),200);
        return () => clearTimeout(timer);
      }, [])
    const { register, formState: { errors }, handleSubmit } = useForm();
    const navigate = useNavigate();
    const onSubmit = async (value) => {
        try {
            const {data} = await axios.post("http://localhost:8000/api/v1/login-user", value);
            console.log(data.fname);
            if(data.Authorization!== undefined){
                localStorage.setItem(process.env.REACT_APP_AUTH, data.Authorization);
                navigate("/",{replace: true});
                await window.location.reload()
            }
        } catch (error) {
            Swal.fire("Failed !",error.response.data.message, "error")
        }
    };

    return(
        <section>
             {loading? <Loading/> : (
        <section>
            <img className="backgroundlogin" src={bglogin} alt="backgroundlogin" />
            <Container>
                <form className="loginform" onSubmit={handleSubmit(onSubmit)} >
                    <h1 className="formtitle mb-5">Login</h1>
                    <div className="mb-3">
                        <label className="form-label formlabel">Email address</label>
                        <input type="email" className="form-control emailfield" id="emaillog" aria-describedby="emailHelp"{...register("email", { required: true, maxLength: 50 })} />
                        {errors.email?.type === 'required' && <p role="alert">Email is required!</p>}
                    </div>
                    <div className="mb-3">
                        <label className="form-label formlabel">Password</label>
                        <input type="password" className="form-control passfield" id="passwordlog"{...register("password", { required: true, maxLength: 50 })} />
                        {errors.password?.type === 'required' && <p role="alert">Password is required!</p>}
                    </div>
                    <NavLink className="forgetpass d-flex justify-content-end">Forget Password?</NavLink>
                    <div className="d-flex justify-content-center">
                        <input type="submit" className="loginbtn" value="Login"/>
                        <NavLink to={SIGNUP}><button type="" className="signupbtn">Sign Up</button></NavLink>
                    </div> 
                </form>
            </Container>
        </section>
             )}
        </section>
    )
}

export default Login;