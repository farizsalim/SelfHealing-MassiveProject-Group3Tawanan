import { Card ,Form,Button} from "react-bootstrap";
import { bgsignup } from "../image";
import "./Signup.css"
import axios from "axios";
import { useState } from "react";

const Signup = () => {
    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confPassword, setConfPassword] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    const Signup = async(e) => {
        e.preventDefault();
        const value = {
            fname: fname,
            lname: lname,
            email: email,
            password: password,
            confPassword:confPassword,
            phoneNumber: phoneNumber
        }
        try {
            await axios.post('http://localhost:8000/register-user');
        } catch (error) {
            
        }
    }

    return(
        <section>
             <img className="backgroundsignup" src={bgsignup} alt="backgroundsignup" />
             <h1 className="title text-center">Register</h1>
                <Card className="d-flex justify-content-center" id="regbody">
                    <Form>
                        <section className="d-flex justify-content-center">
                            <Form.Group  className="mb-3 mx-5">
                                <Form.Label>Nama Depan</Form.Label>
                                <Form.Control id="firstname" type="text" placeholder="Nama Depan" />
                                <Form.Text className="text-muted" value={fname} onChange={(e) => setFname(e.target.value)}>
                                </Form.Text>
                            </Form.Group>
                            <Form.Group className="mb-3 mx-5">
                                <Form.Label>Nama Belakang</Form.Label>
                                <Form.Control id="lastname" type="text" placeholder="Nama Belakang" />
                                <Form.Text className="text-muted" value={lname} onChange={(e) => setLname(e.target.value)}>
                                </Form.Text>
                            </Form.Group>
                        </section>
                        <section className="d-flex justify-content-center">
                            <Form.Group className="mb-3 mx-5">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control id="emailfield" type="email" placeholder="Enter email" />
                                <Form.Text className="text-muted" value={email} onChange={(e) => setEmail(e.target.value)}>
                                </Form.Text>
                            </Form.Group>
                            <Form.Group className="mb-3 mx-5">
                                <Form.Label>Nomor Telepon</Form.Label>
                                <Form.Control id="phonefield" type="number" placeholder="Nomor Telepon" />
                                <Form.Text className="text-muted" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)}>
                                    
                                </Form.Text>
                            </Form.Group>
                        </section>
                        <section className="d-flex justify-content-center">
                            <Form.Group className="mb-3 mx-5">
                                <Form.Label>Password</Form.Label>
                                <Form.Control id="passfield" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                            </Form.Group>
                            <Form.Group className="mb-3 mx-5">
                                <Form.Label>Confirm Password</Form.Label>
                                <Form.Control id="conpassfield" type="password" placeholder="Confirm Password" value={confPassword} onChange={(e) => setConfPassword(e.target.value)}/>
                            </Form.Group>
                        </section>
                        <section className="submitbody">
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="all ready have an account" />
                            </Form.Group>

                            <Button id="submitbtn" variant="primary" type="submit">
                                Sign Up
                            </Button>
                        </section>
                    </Form>
                </Card>
        </section>
    )
}

export default Signup;