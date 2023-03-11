import React, {useState} from 'react';
import {useParams} from "react-router-dom";
import {renameUser} from "../../../store/actions/users-actions";
import {useDispatch} from 'react-redux';
import useUserDetails from "../hooks/useUserDetails";
import {useUsersNavigate} from '../hooks/useUsersNavigate';
import {Formik, Form, Field, ErrorMessage} from "formik";
import SubmitButton from '../../common/form/SubmitButton';
import userEditSchema from "../validation/userEditSchema";

const UserEditPage = () => {
    const {id} = useParams();

    const navigate = useUsersNavigate();

    const dispatch = useDispatch();

    const {details} = useUserDetails(id)

    const onBackButtonClick = () => {
        navigate.goBack()
    }

    const onSubmit = (values) => {
        dispatch(renameUser({id, ...values}));
        navigate.navigateToPage();
    }

    return details ? (<div>
        <h2>User Edit Page</h2>
        <p>{details.name}</p>
        <Formik initialValues={details} onSubmit={onSubmit} validationSchema={userEditSchema}>
            {(formik) => {
                return (
                    <Form>
                        <div>
                            <label htmlFor="name">Name: </label>
                            <Field name="name" id="name" placeholder="User name" />
                        </div>
                        <div>
                            <label htmlFor="email">Email: </label>
                            <Field name="email" id="email" placeholder="User email" />
                        </div>
                        <SubmitButton />
                    </Form>
                )}
            }
        </Formik>
        <button onClick={onBackButtonClick} className="button back_button">Go Back</button>
    </div>) : 'Loading...'
};

export default UserEditPage;