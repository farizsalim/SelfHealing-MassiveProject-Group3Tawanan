import { bglogin } from "../image";
import {Form,Button, Container} from "react-bootstrap"
import "./Login.css"
import { NavLink } from "react-router-dom";
import { SIGNUP } from "../routes";

const Login = () =>{
    return(
        <section>
            <img className="backgroundlogin" src={bglogin} alt="backgroundlogin" />
            <Container>
                <Form className="loginform">
                    <h1 className="formtitle mb-5">Login</h1>
                    <Form.Group  className="mb-3">
                        <Form.Label className="formlabel">Email</Form.Label>
                        <Form.Control id="emailfield" type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label className="formlabel">Password</Form.Label>
                        <Form.Control id="passfield" type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                    </Form.Group>
                    <NavLink className="forgetpass d-flex justify-content-end">Forget Password?</NavLink>
                    <section>
                        <Button id="loginbtn" type="submit">
                            Login
                        </Button>
                        <NavLink to={SIGNUP}>
                            <Button id="signupbtn" type="submit">
                                Sign up
                            </Button>
                        </NavLink>
                    </section>
                </Form>
            </Container>
        </section>
    )
}

export default Login;