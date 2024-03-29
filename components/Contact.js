import React,{useState} from "react";
import {useForm} from "react-hook-form";
import Axios from 'axios'


import * as Yup from "yup"
import {yupResolver} from "@hookform/resolvers/yup"


function Contact()
{

  const[state, setState] = useState({Name:'', Email:'', Message:''})


  const validationSchema = Yup.object().shape({
    Name: Yup.string()
    .required('Name is required'),
    Email: Yup.string()
    .email('email is invalid')
    .required('Email is required'),
    Message: Yup.string()
    .required('Message is required')
  });

  const formOptions = {resolver : yupResolver(validationSchema)};


  const{register, handleSubmit, formState} = useForm(formOptions)
  const {errors} = formState;

  function submit(){

    const data = {
      name:state.Name,
      email:state.Email,
      message:state.Message}
      Axios({
        method:"post",
        url:"http://localhost:8000/api/Contact",
        headers:{
          "Content-Type":"application/json"
        },
        data:JSON.stringify(data)
   }).then(res=>{

state.Name=""
     setState({...state, Email:"",Message:""})
     console.log(res)   }).catch(err=>{
       console.log(err)
     })

  }

  function handleChange(e){
    setState({
      ...state,
      [e.target.name]:e.target.value
    })
  }
  return(
    <>
    <div>
      <form>
              <section className="relative w-full max-w-2xl px-6 py-10 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
                <div className ="absolute top-0 -left-11 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob">

                </div>
                <div className ="absolute top-0 right-1 w-72 h-72 bg-red-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000">

                </div>
                <div className ="absolute -bottom-1 left-20 w-72 h-72 bg-gray-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000">

                </div>
            <h2 className="text-3xl font-semibold text-center text-gray-800 dark:text-white">Contact Us</h2>
            <p className="mt-3 text-center text-gray-600 dark:text-gray-400">Please leave a message below, we will surely respond as soon as we can</p>

            <div className="grid grid-cols-1 gap-6 mt-6 sm:grid-cols-2 md:grid-cols-3">
                <a href="#" className="flex flex-col items-center px-4 py-3 text-gray-700 rounded-md dark:text-gray-200 hover:bg-blue-200 dark:hover:bg-blue-500">
                    <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
                    </svg>

                    <span className="mt-2">Campus Facility Maintainence</span>
                </a>

                <a href="#" className="flex flex-col items-center px-4 py-3 text-gray-700 rounded-md dark:text-gray-200 hover:bg-blue-200 dark:hover:bg-blue-500">
                    <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>

                    <span className="mt-2">01-524-222</span>
                </a>

                <a href="#" className="flex flex-col items-center px-4 py-3 text-gray-700 rounded-md dark:text-gray-200 hover:bg-blue-200 dark:hover:bg-blue-500">
                    <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>

                    <span className="mt-2">cfm@cc.ac.mw</span>
                </a>
            </div>

            <div className="mt-6 ">
                <div className="items-center -mx-2 md:flex">
                    <div className="w-full mx-2">
                        <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">Name</label>

                        <input
                          {...register('Name')}
                          name="Name"
                          value={state.Name}
                          onChange={(e)=>handleChange(e)}
                        className="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"  type="text">
                        </input>
                    </div>

                    <div className="w-full mx-2 mt-4 md:mt-0">
                        <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">E-mail</label>
                        <input
                          {...register('Email')}
                          name="Email"
                          value={state.Email}
                          onChange={(e)=>handleChange(e)}
                        className="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" type="email">
                        </input>
                    </div>
                </div>

                <div className="w-full mt-4">
                    <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">Message</label>
                    <textarea
                    {...register("Message")}
                    name="Message"
                    value={state.Message}
                      onChange={(e)=>handleChange(e)}

                    className={errors.Message?"block w-full h-40 px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-red-800 dark:text-red-300 dark:border-red-600 focus:border-red-500 dark:focus:border-red-500 focus:outline-none":"block w-full h-40 px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"} ></textarea>
                </div>

                <div className="flex justify-center mt-6">
                    <button type="button" onClick={handleSubmit(submit)} className="px-4 py-2 text-white transition-colors duration-200 transform bg-green-900 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Send Message</button>
                </div>
            </div>
        </section>
</form>
    </div>
    </>
  );

}
export default Contact;
