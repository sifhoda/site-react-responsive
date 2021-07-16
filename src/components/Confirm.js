import React , { useState,  useEffect } from 'react'
import "../styles/Confirm.css";
import { Card } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BsCheckCircle } from 'react-icons/bs';
import { FaTimesCircle } from 'react-icons/fa';
import { ValidateEmail } from "../utils/RequestHandlers";
import { useParams } from 'react-router-dom';

function Confirm() {


    const { token } = useParams();

    const [responseBack, setResponseBack] = useState(false);
    const [response, setResponse] = useState(false);

    useEffect( async () => {
        const { data } = await ValidateEmail(token);
        const { success } = data;
        setResponse(success);
        setResponseBack(true);
        
        
    },[])
    
    return (
        <div className="content">
            
            
                

                        {responseBack &&
                                <Card className="mycard">
                                    <Card.Body className="mycard__body">
                                        { response ? (
                                            <BsCheckCircle className="email_success"/>
                                        ) 
                                        : 
                                        (
                                            <FaTimesCircle className="email_success" style={{ color: 'red'}}/>
                                        )
                                        }
                                        
                                        <Card.Title style={{ marginTop: '20px', textTransform : 'uppercase' }}>{response ? ('adresse e-mail confirmée') : ('ERREUR DE VÉRIFICATION')}</Card.Title>
                                        {!response && (
                                            <Card.Subtitle className="mb-2 text-muted">Soit votre e-mail a déjà été vérifié, soit le lien entré n'est pas correct</Card.Subtitle>
                                        )}
                                        { response ? (
                                           <a className="mycard__links" href="/login">S'authentifier</a>
                                        ) 
                                        : 
                                        (
                                            <a className="mycard__links" href="/register">S'inscrire</a>
                                        )
                                        }
                                    </Card.Body>
                                </Card>
                            
                        } 

                   

            
             
        </div>
    )
}

export default Confirm
