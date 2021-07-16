import React, {useState, useEffect } from 'react'
import "../styles/Login.css";
import { Button , Form, FloatingLabel} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import ReCAPTCHA from "react-google-recaptcha";
import { validateReCaptcha, registerUser } from "../utils/RequestHandlers";
import { AiOutlineMail, AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { getSchools } from '../utils/schools';


function Register() {


    
    const [isVerified, setIsVerified] = useState(false);
    const [showPassword, setShowPassword] = useState({first: false, second:false});
    const [schools, setSchools] = useState([]);
    const [conditions,setConditions] = useState(false);


    // Storing the Form Data values 

    const [formData, setFormData] = useState({
        nom: "",
        prenom : "",
        email : "",
        etablissement: "",
        password : "",
        c_password : ""
    });

    // Error Data 

    const [formDataErrors, setFormDataErrors] = useState({})

    const verifyCallBack = async (response) => {
        const { data }  = await validateReCaptcha(response);
        const { success , isValid } = data;
        if(success && isValid){
            setIsVerified(true);
        }
   }

   const handleSubmit = async (e) => {
       e.preventDefault();
        const { data } = await registerUser(formData);
        if(data.errors){
            setFormDataErrors({...data.errors})
        }else {
            setFormDataErrors({});
        }
   }

   useEffect(() => {
        setSchools(getSchools());
   },[schools])

    return (
        <div className="content">
              <Form id="loginform" onSubmit={handleSubmit}>
                <h2>S'inscrire</h2>
                <Form.Group className="mb-3" controlId="nom">
                    <Form.Control  onChange={(e) => setFormData({...formData, nom : e.target.value})} type="text" placeholder="Nom*" className={formDataErrors?.nom && 'invalid'} required/>
                    {formDataErrors?.nom && (
                        <Form.Text className="text-danger text-left">{formDataErrors.nom}</Form.Text>
                    )}
                </Form.Group>
                <Form.Group className="mb-3" controlId="prenom">
                    <Form.Control onChange={(e) => setFormData({...formData, prenom : e.target.value})}  type="text" className={formDataErrors?.prenom && 'invalid'} placeholder="Prenom*"  required/>
                    {formDataErrors?.prenom && (
                        <Form.Text className="text-danger text-left">{formDataErrors.prenom}</Form.Text>
                    )}
                </Form.Group>
                <Form.Group className="mb-3 input" controlId="formBasicEmail">
                    <Form.Control onChange={(e) => setFormData({...formData, email : e.target.value})}  type="email" className={formDataErrors?.email && 'invalid'} placeholder="Enter email" />
                    <AiOutlineMail className="icon" />
                </Form.Group>

                {formDataErrors?.email && (
                    <Form.Group>
                        <Form.Text className="text-danger text-left">{formDataErrors.email}</Form.Text>
                    </Form.Group>
                )}

                <Form.Group className="mb-3" controlId="prenom">
                    <select class="form-control" onChange={(e) => setFormData({...formData, etablissement : e.target.value})}  className={formDataErrors?.etablissement && 'invalid'} id="exampleFormControlSelect1">
                        <option value="" selected>Etablissement</option>
                        {schools && schools.map((school,index) => (
                            <option key={index} value={school.name}>{school.name}</option>
                        ))}
                    </select>
                    {formDataErrors?.etablissement && (
                        <Form.Text className="text-danger text-left">{formDataErrors.etablissement}</Form.Text>
                    )}
                </Form.Group>
                

                <Form.Group className="mb-3 input" controlId="formBasicPassword">
                    <Form.Control onChange={(e) => setFormData({...formData, password : e.target.value})} type={showPassword.first ? 'text' : 'password'} className={formDataErrors?.password && 'invalid'} placeholder="Mot de passe*" />
                    {showPassword.first ? (
                        < AiFillEyeInvisible  className="icon" onClick={ () => setShowPassword({first : false, second: showPassword.second})} />
                    ) : 
                    (
                        < AiFillEye  className="icon" onClick={ () => setShowPassword({first : true, second: showPassword.second})} />
                    )
                    }
                    
                </Form.Group>
                {formDataErrors?.password && (
                    <Form.Group className="mb-3">
                        <Form.Text className="text-danger text-left">{formDataErrors.password}</Form.Text>
                    </Form.Group>
                    )}
                <Form.Group className="mb-3 input" controlId="formBasicPassword">
                    <Form.Control onChange={(e) => setFormData({...formData, c_password : e.target.value})} type={showPassword.second ? 'text' : 'password'} className={formDataErrors?.c_password && 'invalid hide-icon'} placeholder="Confirmer mot de passe" />
                    {showPassword.second ? (
                        < AiFillEyeInvisible  className="icon" onClick={ () => setShowPassword({first : showPassword.first, second: false})} />
                    ) : 
                    (
                        < AiFillEye  className="icon" onClick={ () => setShowPassword({first : showPassword.first, second: true})} />
                    )
                    }
                </Form.Group>
                {formDataErrors?.c_password && (
                    <Form.Group className="mb-3">
                        <Form.Text className="text-danger text-left">{formDataErrors.c_password}</Form.Text>
                    </Form.Group>
                    )}
                <Form.Group className="mb-3 text-left" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="J'accepte les terms et conditions*" onChange={(e) => setConditions(e.currentTarget.checked)}/>
                </Form.Group>

                <Form.Group className="mb-3 captcha-container" controlId="formBasicPassword">
                {!isVerified && (
                    <ReCAPTCHA
                    sitekey="6LdkAZgbAAAAAC3sW2sCBleUiMG-NjBoGCvdIBkk"
                    onChange={verifyCallBack}
                    />
                )}
                </Form.Group>
                
                <Button  id="submitButton" variant="primary" type="submit" disabled={!isVerified || !conditions}>
                    Soummetre
                </Button>
            </Form>
        </div>
    )
}

export default Register
