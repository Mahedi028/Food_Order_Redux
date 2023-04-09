import React from 'react'
import classes from './textarea.module.css'
const FormTextArea = (props) => {
  return (
    <div className={classes.textarea__container}>
        <label>{props.label}</label>
        <textarea
            name={props.name}
            rows={props.rows}
            className={`${classes.select} ${props.className}`}
            placeholder={props.placeholder}
            onChange={props.onChange}
        >{props.value}</textarea>
        <span>{props.errorMessage}</span>
    </div>
  )
}

export default FormTextArea
