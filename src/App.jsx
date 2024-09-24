import React from 'react'
import { useForm } from 'react-hook-form'

const App = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()
  const onSubmit = (data) => console.log(data)
  return (
    <>
    <div className="flex justify-center m-[11vh] ">
            <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <h1 className="text-center text-3xl font-bold">React-Hook-Form</h1>
            </div>
    <div className="mt-3 border rounded-3xl p-[1.2rem] bg-[#ffeef2] w-[100%]">
        <label className="form-control w-full max-w-xs mt-5">
  <div className="label">
    <span className="label-text font-bold">Email</span>
  </div>
  <input {...register("email", { required: true })}  type="email" placeholder="Email" className="input input-bordered max-w-xs w-96 p-[25px]" /> <br />
  {errors.email && <span className='text-danger'>This field is required</span>}
</label>
<label className="form-control w-full max-w-xs mt-5">
  <div className="label">
    <span className="label-text font-bold">Username</span>
  </div>
  <input {...register("username", { required: true , maxLength: 20 , pattern: /^[A-Za-z]+$/i })}  type="text" placeholder="Username" className="input input-bordered max-w-xs w-96 p-[25px]" /> <br />
  {errors.username && <span className='text-danger'>This field is required</span>}
</label>
    <label className="form-control w-full max-w-xs mt-3">
  <div className="label">
    <span className="label-text font-bold">Password</span>
  </div>
  <input {...register("password", { required: true })} type="password" placeholder="Password" className
  ="input input-bordered w-96 max-w-xs p-[25px]" /> <br />
  {errors.password && <span className='text-danger'>This field is required</span>}
</label>
<label className="form-control w-full max-w-xs mt-3">
  <div className="label">
    <span className="label-text font-bold">Password</span>
  </div>
  <input {...register("age", { required: true , min: 18, max: 99 })} type="number" placeholder="Age" className="input input-bordered w-96 max-w-xs p-[25px]" /> <br />
  {errors.age && <span className='text-danger'>This field is required</span>}
</label>
<div className="text-center mt-3">
    <button type="submit" className="btn bg-[#006bfd] mt-4 text-[#fff] hover:bg-[#006bfd]" id="login-btn">submit</button>
</div>
</div>
</form>        
        </div>
    </>
    
  )
}

export default App