import React from 'react';
import { useForm } from 'react-hook-form';

export default function App() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);
  
    return (
        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col bg-transparent w-full'>
            <label className='text-raptureBlue flex flex-col my-4' htmlFor="name_form">Name
                <input className='bg-transparent outline-none border-b-2 border-raptureBlue pt-2 text-white' id='name_form'type="text" {...register("Name", {required: true, min: 2, maxLength: 80})} />
            </label>
            <label className='text-raptureBlue flex flex-col my-4' htmlFor="email_form">Email Address
                <input className='bg-transparent outline-none border-b-2 border-raptureBlue pt-2 text-white' id='email_form' type="email" {...register("Email Address", {required: true, pattern: /^\S+@\S+$/i})} />
            </label>
            <label className='text-raptureBlue flex flex-col my-4' htmlFor="title_form">Title
                <input className='bg-transparent outline-none border-b-2 border-raptureBlue pt-2 text-white' type="text" {...register("Title", {})} />
            </label>
            <label className='text-raptureBlue flex flex-col my-4' htmlFor="company_form">Company Name
                <input className='bg-transparent outline-none border-b-2 border-raptureBlue pt-2 text-white' id='company_form' type="text" {...register("Company Name", {})} />
            </label>
            <label className='text-raptureBlue flex flex-col my-4' htmlFor="message_form">Message
                <textarea className='bg-transparent outline-none border-b-2 border-raptureBlue pt-2 text-white' id='message_form' cols='1' {...register("Message", {required: true})} />
            </label>

                <input  className='text-white hover:text-sacramentoGreen bg-transparent hover:bg-white px-8 py-2 text-baseText font-semibold rounded-full border-2 border-white w-max' type="submit" value='submit' />
        </form>
    );
}