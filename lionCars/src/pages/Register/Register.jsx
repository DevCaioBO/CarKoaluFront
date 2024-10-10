import { useState,useEffect } from 'react'

import './Register.css'
import { useNavigate } from 'react-router-dom';


import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

function Register() {


    const handRegisterOver  = (e)=>{
      var inputsSelect = document.querySelectorAll(".inputs")

      var emailRegisterSecond = document.querySelector("#emailRegister") 
      var emailPasswordSecond = document.querySelector("#passwordRegister") 
      var buttonRegisterOn = document.querySelector("#buttonRegisterOn")
     // Redireciona para a página de login

      if (emailRegisterSecond.value ==""){
      emailRegisterSecond.classList.add("testemil")
     }
     if (emailPasswordSecond.value ==""){
      emailPasswordSecond.classList.add("testemil")
     }
     if (emailRegisterSecond.value !=""){
      emailRegisterSecond.classList.remove("testemil")
     }
     if (emailPasswordSecond.value !=""){
      emailPasswordSecond.classList.remove("testemil")
     }

  
  }

  
    
//   okButtonEnabled()
//   function okButtonEnabled(){
//   const emailRegister = document.querySelector("#emailRegister") 
//   const emailPassword = document.querySelector("#passwordRegister") 
//   const buttonRegisterOn = document.querySelector("#buttonRegisterOn")
//     if(buttonRegisterOn && emailRegister && emailPassword){
//       buttonRegisterOn.disabled =true
//       if(emailRegister.value !="" && emailPassword.value !=""){
    
//         buttonRegisterOn.disabled = false
//       }
//     }

// }

  const navigate = useNavigate();
  const registerSubmit = (e) => {
    e.preventDefault(); 


     var emailRegisterSecond = document.querySelector("#emailRegister") 
     var emailPasswordSecond = document.querySelector("#passwordRegister") 
     var buttonRegisterOn = document.querySelector("#buttonRegisterOn")
    // Redireciona para a página de login
 
    if(emailRegisterSecond.value !="" && emailPasswordSecond.value !=""){
     buttonRegisterOn.classList.add("clickOn")
     buttonRegisterOn.disabled = false
     buttonRegisterOn.addEventListener("click",()=>{
          navigate("/login")
     })
    }
    else{
      buttonRegisterOn.classList.remove("clickOn")
      buttonRegisterOn.disabled = true
    }
  };
  // const [Pages,setPages] = useState(0)
  // useEffect(()=>{
  //   const url =window.location.href
  //   const res = url.split("?")
  //   setPages(res[1])
  // })
  // const pagelinks =()=>{

     
    
  // }
    
  // }
  // const  pageReturn = ()=>{
  //     if(Pages ==1){
  //       return (
  //         <>
  //         <button onClick={()=>pagelinks(0)}>Voltar</button>
  //         </>
  //       )
  //     }else{
  //       return(

  //       )
  //     }
  // }
  return (

    <form id="RegisterBodyController"  onMouseOver={handRegisterOver} >
      <div id="RegisterBodyChild">
        <h3>REGISTER</h3>
        <div id="groupControlerInputs">
          <label htmlFor="emailRegister">Email: </label>
          <input type="email" name="emailRegister" id="emailRegister" className='inputs' autoComplete='off' required placeholder='Digite seu E-mail' />
          <label htmlFor="passwordRegister">Senha: </label>
          <input type="password" name="passwordRegister" id="passwordRegister" className='inputs' autoComplete='off' required placeholder='Digite seu E-mail'/>
          <button  type="submit" id='buttonRegisterOn' onMouseOver={registerSubmit}>Cadastrar</button>
        </div>
        
      </div>
    </form>
  
  )
}

export default Register
