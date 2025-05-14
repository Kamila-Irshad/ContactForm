import React from "react";
import { useForm } from "react-hook-form";
import Wrapper from "./Wrapper";
import InputFields from "./InputFields";
import Label from "./Label";
const Form = () => {
    const{ register, handleSubmit,
        formState: { errors } } = useForm();
    const handleSubmitregistration=(data) =>console.log(data);
    
  return (
    <Wrapper>
      <form action="" className=" space-x-1 m-8" onSubmit={handleSubmit(handleSubmitregistration)}>
        <div className="flex gap-4 ">
          <div className="w-full">
            <Label htmlFor="" className="pb-2">
              Full name <span className="text-[#0E7D69]">*</span>
            </Label>
            <InputFields {...register("name",{required:true})} />
            {errors.name && <p>Required</p>}
          </div>
          <div className="w-full">
            <Label htmlFor="">Last Name <span className="text-[#0E7D69]">*</span></Label>
            <InputFields />
          </div>
        </div>
        <div>
          <Label htmlFor="">Email <span className="text-[#0E7D69]">*</span></Label>
          <InputFields type="email" />
        </div>
        <Label htmlFor="" className=''>Query Type <span className="text-[#0E7D69]">*</span></Label>

        <div className="flex gap-10 mt-2 mb-2  ">
          <div className="flex gap-4 border text-black p-2 rounded-md w-full">
            <InputFields
              type="radio"
              id="GeneralInquiry"
              className=""
              name="query"
            />
            <Label htmlFor="GeneralInquiry ">General Inquiry </Label>
          </div>
          <div className="flex gap-4 text-black border p-2 rounded-md w-full">
            <InputFields
              type="radio"
              id="SupportInquiry"
              className=""
              name="query"
            />
            <Label htmlFor="SupportInquiry">Support Inquiry</Label>
          </div>
        </div>
        <Label className=''> Message</Label>
        <textarea
          name=""
          id=""
          className="w-full h-20 border text-black rounded-md mt-2"
          rows="1"
          cols=""
        ></textarea>
        <div className="flex gap-4 mx-2">
          <InputFields type="checkbox" className="w-0  "></InputFields>
          <Label> I consonent being conectet by the team</Label>
        </div>
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
