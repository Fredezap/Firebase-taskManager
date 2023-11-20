import { Button } from '@mui/material';
import { ErrorMessage, Formik, Form, Field } from 'formik';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';

const LoginFormik = ({logInOut, massage}) => {

    const InitialValues = {
        user: '',
        password: ''
    }

    const registerSchema = Yup.object().shape(
        {
        user: Yup.string()
            .required("User is required"),
        password: Yup.string()
            .required("Password is required")
        }
    )

    const ErrorMessageStyle = {
        color: 'red'
    }

    const navigate = useNavigate();

    const register = () => {
        navigate('/register')
    }

    const LoginAndRedirect = () => {
        logInOut()
        navigate('/dashboard')
    }

    return (
        <div className='formik'>
            <p style={{color:'red'}}>
                {massage ? 'Please log in to see your tasks' : null}
            </p>
            <Formik
                initialValues = { InitialValues }

                validationSchema = { registerSchema }

                onSubmit = {async (values) => {
                    await new Promise((r) => setTimeout(r, 1000));
                    LoginAndRedirect()
                }}
            >

            {({
                values,
                errors,
                touched,
                isSubmitting
            }) => (
                <Form>
                    <label htmlFor='user'>User</label>
                    <Field id="user" name="user" placeholder="Username" type="text"/>

                    {errors.user && touched.user && (<ErrorMessage style={ErrorMessageStyle} component="div" name="user"></ErrorMessage>)}

                    <label htmlFor='password'>Password</label>
                    <Field id="password" name="password" placeholder="Password" type="password"/>

                    {errors.password && touched.password && (<ErrorMessage style={ErrorMessageStyle} component="div" name="password"></ErrorMessage>)}
                
                    <button className='submit-button' type="submit">Login</button>
                    {isSubmitting ? "Logeando al usuario" : null}
                </Form>
            )}
            </Formik>
            <div className='register-login-div'>
                <p>Not registered?</p>
            <Button variant='contained' onClick={register}>Register</Button>
            </div>
        </div>
    );
}

export default LoginFormik;
