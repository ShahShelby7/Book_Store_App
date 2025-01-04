import React from 'react'
import LoginModal from './LoginModal'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form"


export default function ContactPage() {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => console.log(data)

    return (
        <div className='flex justify-center mt-40'>
            <div>
                <div className="modal-box min-w-[500px]">

                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" ><Link to='/'>✕</Link></button>
                    </form>

                    <h3 className="font-bold text-lg">Contact Us!</h3>

                    <form onSubmit={handleSubmit(onSubmit)}>

                        {/*  email*/}
                        <div className='mt-6 space-y-3' >
                            <span className='text-xl text-black font-semibold'>Email</span>
                            <br />
                            <input type="email" placeholder='Enter your email'
                                className='outline-none text-xl bg-transparent ' name='email'
                                {...register("email", { required: true })}
                            />
                            {errors.password && <span className='text-sm text-red-500'>This field is required</span>}
                        </div>

                        {/*  Name*/}
                        <div className='mt-6 space-y-3' >
                            <span className='text-xl text-black font-semibold'>Name</span>
                            <br />
                            <input type="text" placeholder='Enter your Name'
                                className='outline-none text-xl bg-transparent ' name='name'
                                {...register("name", { required: true })}
                            />
                            {errors.name && <span className='text-sm text-red-500'>This field is required</span>}
                        </div>

                        {/* Message */}
                        <div className='mt-6 space-y-2'>
                            <span className='text-xl text-black font-semibold'>Message</span>
                            <br />
                            <input type="text" placeholder='Enter your message'
                                className='outline-none text-xl bg-transparent' name='message'
                                {...register("message", { required: true })}
                            />
                            {errors.message && <span className='text-sm text-red-500'>This field is required</span>}
                        </div>

                        {/* buttons */}
                        <div className='mt-8 flex justify-between items-center'>
                            <button className='btn bg-red-500 hover:bg-red-700'>Contact Us</button>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    )
}
