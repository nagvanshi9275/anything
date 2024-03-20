






import React from "react";

import { Button, Form, FormControl, Col } from 'react-bootstrap';

import "./index.css"

import supabase from "./config";

//import { initializeApp } from "firebase/app";

//import {  createUserWithEmailAndPassword } from "firebase/auth";

//import { GoogleAuthProvider } from "firebase/auth";

//import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

//import Main4 from "./Main4";

//import Main6 from "./Main6";

import Main1 from "./Main1";
//import { AsyncResource } from "async_hooks";

import Main5 from "./Main5";

export default function Main4(){

  const[dekho, setdekho] = React.useState(true)

  const[turup, setturup] = React.useState(false)

  const[Email1, setEmail1] = React.useState("")

  const[password1, setpassword1] = React.useState("")

  
     

  


       function Email(e){

        setEmail1(e.target.value)



       }

        function Password(e){

          setpassword1(e.target.value)


        }

        

     async function Signup(){

      //  const email = Email1

       // const password = password1

         
        try {
          const { data, error } = await supabase.auth.signUp({
            email: Email1,
            password:  password1,

            //setdekho(false),

          //  setturup(true).


          });
          
          //if (error) {
         //   throw new Error(error.message);
       //   }
    
          setdekho(false);
          setturup(true);
          console.log("Signup successful");


          console.log("Signup successful");
        } catch (error) {
          console.error("Signup error:", error.message);
        }
  




      }

       //  React.useEffect(() => {
          
      //   const session = supabase.auth.session()



       //  })


         function Google(){




            



         }





    return(
    <>
    
    
    
       {( dekho &&  <div className="container">

    <Col xs={6} md={6} sm={7}> {/* This will make the input full-width on extra small screens and half-width on medium screens */}
            <FormControl type="email" placeholder="Enter email" onChange={Email} id="input1" className="mb-3" />

            <FormControl type="password" id="input2" placeholder="password" className="form-control mb-3" onChange={Password}  />


            <button
            type="button"
            className="btn btn-primary mb-3 w-100 w-lg-auto h-30"
            id="input31"
            
           
            onClick={Signup}
            



          >Signup</button>

           

             

<button 
          
            type="button"
            onClick={Google}
            className="btn btn-dark mb-3  w-100 w-lg-auto h-30"

            id="input3"

          >
            <span className="me-2">Login </span>
            
    
          </button>

      









          </Col>
    
    </div>
      
       )}


      {turup && <Main5 />}


    </>






    )





}






























