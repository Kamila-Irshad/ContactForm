"use client"
import React from "react";
import { useForm } from "react-hook-form";
import Wrapper from "./Wrapper";
import InputFields from "./InputFields";
import Label from "./Label";
import ErrorMessage from './ErrorsMessages'
import {  useRouter } from "next/router";
const Form = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const router = useRouter()

    // const handleSubmitregistration=(data) =>console.log(data);
    const onSubmit= (data)=>{
        router.push('/submit')
console.log(data);

    }
  return (
    <Wrapper>
      <form action="" className=" space-x-1 m-8" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex gap-4 ">
          <div className="w-full">
            <Label htmlFor="" className="pb-2">
              Full name <span className="text-[#0E7D69]">*</span>
            </Label>
            <InputFields {...register("name",{required:true})} />
            {errors.name && <ErrorMessage/>}
          </div>
          <div className="w-full">
            <Label htmlFor="">Last Name <span className="text-[#0E7D69]">*</span></Label>
            <InputFields {...register("name",{required:true})} />
            {errors.name && <ErrorMessage/>}
          </div>
        </div>
        <div>
          <Label htmlFor="" >Email <span className="text-[#0E7D69]">*</span></Label>
          <InputFields type="email" {...register("email",{required:true})} />
          {errors.email && <ErrorMessage/>}
        </div>
        <Label htmlFor="" className=''>Query Type <span className="text-[#0E7D69]">*</span></Label>

        <div className="flex gap-10 mt-2 mb-2  ">
          <div className="flex gap-4 border text-black p-2 rounded-md w-full">
            <InputFields
              type="radio"
              id="GeneralInquiry"
              className=""
              name="query"
            {...register("choice",{required:true})}
            />
            <Label htmlFor="GeneralInquiry ">General Inquiry </Label>
          </div>
          <div className="flex gap-4 text-black border p-2 rounded-md w-full">
            <InputFields
              type="radio"
              id="SupportInquiry"
              className=""
              name="query"
              {...register("choice",{required:true})}
            />
            <Label htmlFor="SupportInquiry">Support Inquiry</Label>
          </div>
        </div>
        {errors.choice && <ErrorMessage/>}
        <Label className=''> Message</Label>
        <textarea
          name=""
          id=""
          className="w-full h-20 border p-2 text-black rounded-md mt-2"
          rows="1"
          cols=""
          {...register("AnyMessage",{required:true})}
        ></textarea>
        {errors.AnyMessage && <ErrorMessage/>}
        <div className="flex gap-4 mx-2">
          <InputFields type="checkbox" className="w-0  "
          {...register("checkbox",{required:true})}
          />
          <Label> I consonent being conectet by the team</Label>
        </div>
        {errors.checkbox && <ErrorMessage/>}
        <button
          type="submit"
          
          className="w-full border-2 bg-[#0E7D69] p-2 rounded-md mt-4"
        >
          Submit
        </button>
      </form>
    </Wrapper>
  );
};

export default Form;
