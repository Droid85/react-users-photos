import React from "react";
import {useFormikContext} from "formik";


const SubmitButton = () => {
    const formik = useFormikContext();

    return  <button type='submit' disabled={!formik.isValid}>Submit</button>
}

export default SubmitButton;
