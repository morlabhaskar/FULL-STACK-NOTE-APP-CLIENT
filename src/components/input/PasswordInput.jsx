import React, { useState } from 'react';
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";

const PasswordInput = ({ value, onChange, placeholder }) => {
    const [isShowPassword, setIsShowPassword] = useState(false);

    const toggleShowPassword = () => {
        setIsShowPassword(!isShowPassword);
    }

    return (
        <div className='flex items-center bg-transparent border-[1.5px] px-5 rounded mb-4'>
            <input 
                type={isShowPassword ? "text" : "password"}
                value={value}
                placeholder={placeholder || "password"}
                onChange={onChange}
                autoComplete='off'
                className='w-full text-sm bg-transparent py-3 rounded outline-none '
            />
            {isShowPassword ? <FaRegEye className='text-primary cursor-pointer' size={22} onClick={()=>toggleShowPassword()}/>
            :<FaRegEyeSlash className='text-slate-700 cursor-pointer' size={22} onClick={()=>toggleShowPassword()}/>}
        </div>
    )
}

export default PasswordInput