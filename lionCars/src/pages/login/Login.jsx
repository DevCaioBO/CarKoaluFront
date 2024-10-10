
import "./login.css"
import { useNavigate } from "react-router-dom"
import { useState,useRef, useEffect } from "react";
// const loginSubmitButton =document.querySelector("#loginSubmitButton")
// const loginInputEmail =document.querySelector("#loginInputEmail")
// const  loginInputPassword = document.querySelector("#loginInputPassword")
export default function Login() {
    const navigate = useNavigate();
    const [inputEmail,setinputEmail] = useState("")
    const [inputPassword,setinputPassword] = useState("")
    const buttonSubmitLogin = useRef(null)
    const inputEmailRef = useRef(null)
    const inputPasswordRef = useRef(null)
    useEffect(()=>{
        if(inputEmail.trim() == ""){
            inputEmailRef.current.classList.add("testemil")
            
        }
        if(inputEmail.trim() !=""){
            inputEmailRef.current.classList.remove("testemil")
            
        }
    },[inputEmail])

    useEffect(()=>{
        if(inputPassword.trim() == ""){
            inputPasswordRef.current.classList.add("testemil")
            
        }
        if(inputPassword.trim() !=""){
            inputPasswordRef.current.classList.remove("testemil")
            
        }
    },[inputPassword])
    const handleInputEmail = (e)=>{
        console.clear()
        setinputEmail(e.target.value)

        
    }
    const handleInputPassword =(e)=>{
        setinputPassword(e.target.value)
    }
    buttonSubmitLogin.disabled =true
    function loginSubmit(e){
        e.preventDefault();
               
            if(inputPassword.trim() != "" && inputEmail.trim() !=""){
                buttonSubmitLogin.disabled =false
                navigate("/home")
                
            }
    }
    const formCheckValues =()=>{
        if(inputPassword.trim() != "" && inputEmail.trim() !=""){
            buttonSubmitLogin.current.classList.add("clickOn")
            
            
        }else{
            buttonSubmitLogin.current.classList.remove("clickOn")
        }
    }

    // const formBoxLoginStyles = document.getElementById("formBoxLoginStyles")
    // function errorFieldForm(){
    //     if(loginInputEmail && loginInputPassword ){
    //     if(loginInputEmail.value == ""){
    //         loginInputEmail.classList.add("testemil")
    //     }
    //     if (loginInputPassword.value ==""){
    //         loginInputEmail.classList.add("testemil")
    //     }
    // }
    // }
    

    return (
        <form id="formBoxLoginStyles"  onMouseOver={formCheckValues}>
            <h3>Login</h3>
            <div id="boxLogininputGroup">
                <label htmlFor="loginInputEmail">Email: </label>
                <input type="email" id="loginInputEmail" className="inputsLoginStyles"  name="loginInputEmail" onChange={handleInputEmail} value={inputEmail} ref={inputEmailRef} placeholder="Digite seu E-mail" autoComplete='off' />
                <label htmlFor="loginInputPassword">Senha: </label>
                <input type="password" id="loginInputPassword" name="loginInputPassword"   className="inputsLoginStyles" ref={inputPasswordRef} onChange={handleInputPassword} value={inputPassword} placeholder="Digite sua Senha" autoComplete='off'/>
            </div>

            <button onClick={loginSubmit} id="loginSubmitButton" ref={buttonSubmitLogin}>Entrar</button>
        </form>
    )
}