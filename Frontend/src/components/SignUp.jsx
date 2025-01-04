import React from 'react'
import LoginModal from './LoginModal'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form"


export default function SignUp() {
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

                    <h3 className="font-bold text-lg">Sign Up!</h3>

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

                        {/* password */}
                        <div className='mt-6 space-y-2'>
                            <span className='text-xl text-black font-semibold'>Password</span>
                            <br />
                            <input type="password" placeholder='Enter your password'
                                className='outline-none text-xl bg-transparent' name='password'
                                {...register("password", { required: true })}
                            />
                            {errors.password && <span className='text-sm text-red-500'>This field is required</span>}
                        </div>

                        {/* buttons */}
                        <div className='mt-8 flex justify-between items-center'>
                            <button className='btn bg-red-500 hover:bg-red-700'>Sign Up</button>
                            <p>Already have account? <span className='underline text-blue-500 cursor-pointer' onClick={() => { document.getElementById('my_modal_3').showModal() }}>Login</span></p>
                            <LoginModal />
                        </div>
                    </form>
                </div>
            </div>

        </div>
    )
}
