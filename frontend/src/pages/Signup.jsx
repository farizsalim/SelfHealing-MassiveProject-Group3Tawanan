import { Card ,Form,Button, Col, Row} from "react-bootstrap";
import { bgsignup } from "../image";
import "./Signup.css"
import { postApi } from "../api/axios";
import { useForm } from "react-hook-form";

const Signup = () => {
        const { register, handleSubmit } = useForm();
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
                await postApi("http://localhost:8000/api/v1/register-user", value)
            } catch (error) {
                
            }
        };

    return(
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
                                    </div>
                                </Col>
                                <Col>
                                    <div className="mb-3 mx-5">
                                        <label className="d-block">Last Name</label>
                                        <input id="lastname" type="text" placeholder="Nama Belakang"{...register("lastName", { required: true, maxLength: 20 })} />
                                    </div>
                                </Col>
                                <Col>
                                    <div className="mb-3 mx-5">
                                        <label className="d-block">Email</label>
                                        <input id="email" type="email" placeholder="Email"{...register("email", { required: true, maxLength: 50 })} />
                                    </div>
                                </Col>
                                <Col>
                                    <div className="mb-3 mx-5">
                                        <label className="d-block">Phone Number</label>
                                        <input id="phoneNumber" type="number" placeholder="Phone Number"{...register("phoneNumber", { required: true, maxLength: 50 })} />
                                    </div>
                                </Col>
                                <Col>
                                    <div className="mb-3 mx-5">
                                        <label className="d-block">Password</label>
                                        <input id="password" type="password" placeholder="Password"{...register("password", { required: true, maxLength: 50 })} />
                                    </div>
                                </Col>
                                <Col>
                                    <div className="mb-3 mx-5">
                                        <label className="d-block">Confirmation Password</label>
                                        <input id="confPassword" type="password" placeholder="Confirmation Password"{...register("confPassword", { required: true, maxLength: 50 })} />
                                    </div>
                                </Col>
                                <Col>
                                    <input type="submit" id="submitbtn" value="Sign Up" />
                                </Col>
                            </Row>
                                
                        </section>
                </form>
        </section>
    )
}

export default Signup;