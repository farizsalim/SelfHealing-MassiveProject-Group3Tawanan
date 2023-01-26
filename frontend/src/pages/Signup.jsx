import { Col, Row} from "react-bootstrap";
import { bgsignup } from "../image";
import "./Signup.css"
import { useForm } from "react-hook-form";
import {useNavigate} from "react-router-dom"
import Swal from "sweetalert2";
import axios from "axios";
import { useEffect,useState } from "react";
import Loading from "../components/Loading";

const Signup = () => {
    const [loading,setLoading] = useState(true)
    useEffect(() => {
        window.scrollTo(0, 0)
        const timer = setTimeout(() => setLoading(false),200);
        return () => clearTimeout(timer);
      }, [])
        const { register, formState: { errors }, handleSubmit } = useForm();
        const navigate = useNavigate();
        const onSubmit = async (data) => {
            const value = {
                fname: data.firstName,
                lname: data.lastName,
                email: data.email,
                phoneNumber: data.phoneNumber,
                password: data.password,
                confPassword: data.confPassword
            }
            try {
                console.log(value);
                await axios.post(`http://localhost:8000/api/v1/register-user`, value);
                navigate("/registrationsuccess");
            } catch (error) {
                Swal.fire("Failed !",error.response.data.message, "error")
            }
        };

    return(
        <section>
            {loading? <Loading/> : (
            <section>

            
             <img className="backgroundsignup" src={bgsignup} alt="backgroundsignup" />
             <h1 className="title text-center">Register</h1>
                <form onSubmit={handleSubmit(onSubmit)} className="d-flex justify-content-center" id="regbody">
                        <section className="d-flex justify-content-center">
                            <Row xs={2}>
                                <Col>
                                    <div className="mb-3 mx-5">
                                        <label className="d-block">First Name</label>
                                        <input id="firstname" type="text" placeholder="Nama Depan"{...register("firstName", { required: true, maxLength: 20 })} />
                                        {errors.firstName?.type === 'required' && <p role="alert">First name is required!</p>}
                                    </div>
                                </Col>
                                <Col>
                                    <div className="mb-3 mx-5">
                                        <label className="d-block">Last Name</label>
                                        <input id="lastname" type="text" placeholder="Nama Belakang"{...register("lastName", { required: true, maxLength: 20 })} />
                                        {errors.lastName?.type === 'required' && <p role="alert">Last name is required!</p>}
                                    </div>
                                </Col>
                                <Col>
                                    <div className="mb-3 mx-5">
                                        <label className="d-block">Email</label>
                                        <input id="email" type="email" placeholder="Email"{...register("email", { required: true, maxLength: 50 })} />
                                        {errors.email?.type === 'required' && <p role="alert">Email is required!</p>}
                                    </div>
                                </Col>
                                <Col>
                                    <div className="mb-3 mx-5">
                                        <label className="d-block">Phone Number</label>
                                        <input id="phoneNumber" type="number" placeholder="Phone Number"{...register("phoneNumber", { required: true, maxLength: 50 })} />
                                        {errors.phoneNumber?.type === 'required' && <p role="alert">Phone Number is required!</p>}
                                    </div>
                                </Col>
                                <Col>
                                    <div className="mb-3 mx-5">
                                        <label className="d-block">Password</label>
                                        <input id="password" type="password" placeholder="Password"{...register("password", { required: true, maxLength: 50 })} />
                                        {errors.password?.type === 'required' && <p role="alert">Password is required!</p>}
                                    </div>
                                </Col>
                                <Col>
                                    <div className="mb-3 mx-5">
                                        <label className="d-block">Confirmation Password</label>
                                        <input id="confPassword" type="password" placeholder="Confirmation Password"{...register("confPassword", { required: true, maxLength: 50 })} />
                                        {errors.confPassword?.type === 'required' && <p role="alert">Confirmation Password is required!</p>}
                                    </div>
                                </Col>
                                <Col>
                                    <input type="submit" id="submitbtn" value="Sign Up" />
                                </Col>
                            </Row>
                                
                        </section>
                </form>
                </section>
            )}
        </section>
    )
}

export default Signup;