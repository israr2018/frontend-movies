import { useField } from 'formik';
import React from 'react';
import {   Form,
    Input,
    Typography, 
    Row, 
    Col
  } from 'antd';

function TextInput({label, ...props}) {
    const [field, meta] = useField(props);

    return (
        <>
            <label htmlFor={props.id || props.name}>{label}</label>
            <Input {...field} {...props} />
            {meta.touched && meta.error ? (
                <div style={{color: 'red'}}>{meta.error}</div>
            ): null}        
        </>
    )
}

export default TextInput
