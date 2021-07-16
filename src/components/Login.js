import React , {useState, useContext } from 'react'
import "../styles/Login.css";
import { Button , Form, Alert } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import ReCAPTCHA from "react-google-recaptcha";
import { validateReCaptcha } from "../utils/RequestHandlers";
import { AiOutlineMail, AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { loginUser } from "../utils/RequestHandlers";
import { UserContext } from "../UserContext";
import { useHistory } from 'react-router-dom';


function Login() {

    const { User, setUser } = useContext(UserContext);
    const history = useHistory();

    const [isVerified, setIsVerified] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const [formData, setFormData] = useState({
        email : "",
        password : ""
    });

    const [formDataErrors, setFormDataErrors] = useState({})


    const handleSubmit = async (e) => {
        e.preventDefault();
         const { data } = await loginUser(formData);
         if(data.errors){
             setFormDataErrors({...data.errors})
         }else {
             setFormDataErrors({});
             // The login is ok and we can retrieve our information 
            const { sessionData } = data;
            console.log(sessionData);
            setUser({
                isLoggedIn : true,
                sessionDetails : sessionData
            })
            localStorage.setItem("UserSession", JSON.stringify(sessionData));
            history.push('/');
            

         }
    }


    const verifyCallBack = async (response) => {
         const { data }  = await validateReCaptcha(response);
         const { success , isValid } = data;
         if(success && isValid){
             setIsVerified(true);
         }
    }

    return (
        <div className="content">
            <Form id="loginform" onSubmit={handleSubmit}>
                <h2>Authentification</h2>

                {formDataErrors?.account && 
                (
                    <Alert  variant='danger'>{formDataErrors.account}</Alert>
                )
                }
                <Form.Group className="mb-3 input" controlId="formBasicEmail">
                    <Form.Control  type="email" onChange={(e) => setFormData({...formData, email : e.target.value})} placeholder="Enter email" required/>
                    <AiOutlineMail className="icon" />
                </Form.Group>
                {formDataErrors?.email && (
                    <Form.Group>
                        <Form.Text className="text-danger text-left">{formDataErrors.email}</Form.Text>
                    </Form.Group>
                )}

                <Form.Group className="mb-3 input" controlId="formBasicPassword">
                    <Form.Control onChange={(e) => setFormData({...formData, password : e.target.value})} type={showPassword ? 'text' : 'password'} placeholder="Password" required/>
                    {showPassword ? (
                        < AiFillEyeInvisible  className="icon" onClick={ () => setShowPassword(false)} />
                    ) : 
                    (
                        < AiFillEye  className="icon" onClick={ () => setShowPassword(true)} />
                    )
                    }
                </Form.Group>
                {formDataErrors?.password && (
                    <Form.Group>
                        <Form.Text className="text-danger text-left">{formDataErrors.password}</Form.Text>
                    </Form.Group>
                )}

                <Form.Group className="mb-3 captcha-container" controlId="formBasicPassword">
                {!isVerified && (
                    <ReCAPTCHA
                    sitekey="6LdkAZgbAAAAAC3sW2sCBleUiMG-NjBoGCvdIBkk"
                    onChange={verifyCallBack}
                    />
                )}
                </Form.Group>
                
                <Button  id="submitButton" variant="primary" type="submit" disabled={!isVerified}>
                    Soummetre
                </Button>

                <Form.Group className="form-options">
                    <Form.Text className="form-options-right">mot de passe oublié ?</Form.Text>
                    <Form.Text>S'inscrire</Form.Text>
                </Form.Group>
            </Form>
        </div>
    )
}

export default Login
