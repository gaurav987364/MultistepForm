import React from 'react'
import { useFormContext } from 'react-hook-form';
import { FormDataType } from '../../schemas/schema';


const Input:React.FC<{name:string | number;label:string;placeholder:string;type?:string;}> = ({
    name,
    label,
    placeholder,
    type = 'text'
})=>{
    const {register,formState:{errors}} = useFormContext<FormDataType>();

    return (
        <div className=' flex flex-col'>
            <label className="text-gray-700 font-medium mb-1">{label}</label>
            <input 
             type={type} 
             placeholder={placeholder} 
             {...register(name as keyof FormDataType)}
             className={`border rounded-lg px-4 py-2 focus:outline-none focus:ring-[1px] placeholder:text-gray-400 text-black ${
                errors[name as keyof FormDataType]
                  ? "border-red-500 focus:ring-red-300"
                  : "border-gray-300 focus:ring-blue-400"
              }`}
            />
            {errors[name as keyof FormDataType] && (
                <p className="text-red-500 text-xs mt-1 ">
                    {errors[name as keyof FormDataType]?.message}
                </p>
            )}
        </div>
    )
};

export default Input;