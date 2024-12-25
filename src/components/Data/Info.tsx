import { FormProvider, useForm } from "react-hook-form";
import { FormDataType, FormSchema } from "../../schemas/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import Input from "../ui/Input";
import Button from "../ui/Button";
import { Props } from "../../utils";

const Info = ({next,prev}:Props) => {
  const methods = useForm<FormDataType>({ resolver: zodResolver(FormSchema) });
  
  const onFSubmit = (data: FormDataType) => {
    console.log("Form submitted");
    if(!data) return;
    if(data){
        nextStep();
    }
    console.log(data);
    methods.reset();
  };

  const nextStep = ()=>{
    next();
  };

  // Debugging validation errors
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onError = (errors:any) => {
    console.error("Validation errors:", errors);
  };

  //console.log(methods.watch())
  return (
    <div className="mx-auto w-full h-[35rem] p-4 max-sm:p-2 bg-white overflow-y-scroll no-scrollbar">
    <p className="text-lg text-black font-semibold mb-4">
      How would you like employers to contact you?
    </p>
    <div>
      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit(onFSubmit, onError)}
          className="grid gap-4 grid-cols-2 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1"
        >
          <Input
            name="name"
            label="Name"
            type="text"
            placeholder="Enter your name."
          />
          <Input
            name="email"
            label="Email"
            type="email"
            placeholder="Enter your e-mail."
          />
          <Input
            name="address"
            label="Address"
            type="text"
            placeholder="Mailing Address."
          />
          <Input
            name="city"
            label="City"
            type="text"
            placeholder="City."
          />
          <Input
            name="state"
            label="State"
            type="text"
            placeholder="State."
          />
          <div className="flex flex-col  sm:flex-row sm:justify-between items-center  w-full px-2 mt-4 space-y-2 sm:space-y-0 sm:space-x-2">
            <Button name="Back" type="button" purpose="back" onClick={prev} />
            <Button name="Save & Next" type="submit" purpose="save" onClick={nextStep} />
          </div>
        </form>
      </FormProvider>
    </div>
  </div>  
  );
};

export default Info;
