import React from 'react'
import classes from './forminput.module.css'
const FormInput = (props) => {
  return (
    <div className={classes.input__container}>
        <label htmlFor={props.name}>{props.label}</label>
        <input
            name={props.name}
            value={props.value}
            type={props.type}
            className={`${classes.input} ${props.className}`}
            placeholder={props.placeholder}
            onChange={props.onChange}
            pattern={props.pattern}
            required={props.required}
            // onBlur={handleFocus}
            // onFocus={()=>props.name==="password_confirmation" && setFocused(true)}
            // focused={focused.toString()}
        />
        <span>{props.errorMessage}</span>
    </div>
  )
}

export default FormInput
