import React, {useState} from 'react';
import {useParams} from "react-router-dom";
import {useDispatch} from 'react-redux';
import {createUser} from "../../../store/actions/users-actions";
import {useUsersNavigate} from '../hooks/useUsersNavigate';
import {Formik, Form, Field, ErrorMessage} from "formik";
import SubmitButton from '../../common/form/SubmitButton';
import newUserSchema from "../validation/newUserSchema";

const NewUserPage = () => {
    const dispatch = useDispatch();
    const navigate = useUsersNavigate();
    const {id} = useParams();

    const onBackButtonClick = () => {
        navigate.goBack();
    }

    const onSubmit = (value) => {
        dispatch(createUser(value));
        navigate.navigateToPage();
    }

    return <div>
        <h2>Add new user Page</h2>
        <Formik initialValues={{name: ''}} onSubmit={onSubmit} validationSchema={newUserSchema}>
            {(formik) => {
                return (
                    <Form>
                        <div>
                            <label htmlFor="name">Name: </label>
                            <Field name="name" id="name" />
                            <ErrorMessage name="name" />
                        </div>
                        <div>
                            <label htmlFor="email">Email: </label>
                            <Field name="email" id="email" />
                            <ErrorMessage name="email" />
                        </div>
                        <SubmitButton />
                    </Form>
                )}
            }
        </Formik>
        <button onClick={onBackButtonClick} className="button back_button">Go Back</button>
    </div>
};

export default NewUserPage;
