import React, { useState } from 'react';
import { useForm } from "react-hook-form";


const MakeAdmin = () => {
    const { register, handleSubmit } = useForm();
    const [success, setSuccess] = useState(false)
    const [email, setEmail] = useState('')
    // admin create using put operation

    const onSubmit = data => {
        console.log(data)
        fetch('http://localhost:8000/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)

        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    setEmail('')
                    setSuccess(true)
                    alert('Successfully added admin')
                }
            })
    }
    return (
        <div className='main d-flex justify-content-center align-items-center pt-5'>
            <div>
                <h3 className='text-primary text-center fw-bolder'>Make Co-Admin</h3>
                <form onSubmit={handleSubmit(onSubmit)} className="d-flex justify-content-center flex-column align-items-center">

                    <input  {...register("email")}
                        placeholder="Email"
                        className='px-3 p-1 m-1 w-100'/>
                    <br />
                    <input type="submit" className='btn btn-primary w-100 rounded-0' value="Add" />
                </form>

            </div>
        </div>
    );
};

export default MakeAdmin;