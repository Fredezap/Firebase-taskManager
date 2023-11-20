import React from 'react';
import { User } from './../../../models/user.class'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { ROLES } from '../../../models/roles.enum';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const RegisterFormik = () => {

    let user = new User();

    const initialValues = {
        username: '',
        email: '',
        password: '',
        confirm: '',
        role: ROLES.USER
    }

    const registerSchema = Yup.object().shape(
        {
            username: Yup.string()
                .min(4, 'Username too short')
                .max(20, 'Username too long')
                .required('Username is required'),
            email: Yup.string()
                .email('Invalid Email format')
                .required('Email is required'),
            password: Yup.string()
                .min(8, 'Password too short')
                .required('Password is required'),
            confirm: Yup.string()
                .required('You must confirm the password'),
            role: Yup.string()
                .oneOf([ROLES.USER, ROLES.ADMIN], 'You must select a role: User / Admin')
                .required('role is required')
        })
    
    const submit = (values) => {
        alert("User registred")
    }

    const ErrorMessageStyle = {
        color: 'red'
    }

    const navigate = useNavigate();

    const login = () => {
        navigate('/login')
    }

    const BackToHome = () => {
        navigate('/dashboard')
    }
    return (
        <div className='formik'>
            <Formik
                initialValues = { initialValues }

                validationSchema = { registerSchema }

                onSubmit = {async (values) => {
                    await new Promise((r) => setTimeout(r, 1000));
                    BackToHome()
                }}
            >

            {({ values,
                touched,
                errors,
                isSubmitting,
                handleBlur,
                handleChange }) => (
                    <Form>
                        <label htmlFor="username">Username</label>
                        <Field id="username" name="username" placeholder="Your username" type="text"/>

                        {/* Username errors */}
                        { errors.username && touched.username && ( <ErrorMessage style={ErrorMessageStyle} name="username" component="div"></ErrorMessage> ) }

                        <label htmlFor="email">Email</label>
                        <Field id="email" name="email" placeholder="Example@email.com" type="email"/>

                        {/* Email errors */}
                        { errors.email && touched.email && ( <ErrorMessage style={ErrorMessageStyle} name="email" component="div"></ErrorMessage> ) }

                        <label htmlFor="password">Password</label>
                        <Field id="password" name="password" placeholder="Your password" type="password"/>

                        {/* Password errors */}
                        { errors.password && touched.password && ( <ErrorMessage style={ErrorMessageStyle} name="password" component="div"></ErrorMessage> ) }

                        <label htmlFor="confirm">Confirm password</label>
                        <Field id="confirm" name="confirm" placeholder="Confirm password" type="password"/>

                        {/* Confirm password errors */}
                        { errors.confirm && touched.confirm && ( <ErrorMessage style={ErrorMessageStyle} name="confirm" component="div"></ErrorMessage> ) }

                        <button className='submit-button' type="submit">Register</button>
                        {isSubmitting ? "Creando nuevo usuario" : null}
                    </Form>
                )}

            </Formik>
            <div className='register-login-div'>
                <p>Already registered?</p>
            <Button variant="contained" onClick={login}>Login</Button>
            </div>
        </div>
    );
}

export default RegisterFormik;
