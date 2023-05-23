import React from "react";

interface InputProps {
  id: string;
  onChange: any;
  value: string;
  label: string;
  type?: string;
}

const Input: React.FC<InputProps> = ({
  id,
  onChange,
  value,
  label,
  type
}) => {
  return (
    <div className="relative">
      <input autoComplete="off" onChange={onChange} type={type} value={value} id={id} className="block rounded-md px-4 pt-7 pb-3 w-full text-md text-black bg-transparent border border-gray-300 appearance-none focus:outline-none focus:ring-0 peer" placeholder=" " />
      <label htmlFor={id} className="absolute text-md text-zinc-400 duration-150 transform -translate-y-3 top-5 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3">{label}</label>
    </div>
  )
}

export default Input;