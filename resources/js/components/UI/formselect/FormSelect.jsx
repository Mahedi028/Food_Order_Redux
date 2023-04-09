import React from 'react'
import classes from  './formselect.module.css'
const FormSelect = (props) => {
  return (
    <div className={classes.select__container}>
        <label>{props.label}</label>
        <select
            name={props.name}
            className={`${classes.select} ${props.className}`}
            onChange={props.onChange}
        >
        {props.children}
        </select>
        <span>{props.errorMessage}</span>
    </div>

  )
}


export const SelectOptions=(props)=>{
    const {value, option_name}=props
    return <option value={value}>{option_name}</option>
}

export default FormSelect
