import React from 'react'
import { useState } from 'react';
import'./Forminput.css'

const Forminput = (props) => {
  const [focused, setFocused] = useState(false);
  const { label ,onChange ,errorMessage ,   id , ...inputprops } = props;

  const handlFocus = (e) =>{
    setFocused(true);

  };
  
  return (
    <>

    <div className="forminput">
      <label>{label}</label>
      <input  

      {...inputprops}

      onChange={onChange}

      onBlur={handlFocus}

      onFocus = {() => inputprops.name === 'Confirmpassword'&& setFocused(true)}

      focused = {focused.toString()}

      />
      <span>{errorMessage}</span>
    </div>
      
    </>
  )
}

export default Forminput
