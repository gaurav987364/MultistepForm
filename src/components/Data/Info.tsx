import { FormProvider, useForm } from "react-hook-form";
import { FormDataType, FormSchema } from "../../schemas/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import Input from "../ui/Input";
import Button from "../ui/Button";

const Info = () => {
  const methods = useForm<FormDataType>({ resolver: zodResolver(FormSchema) });
  
  const onFSubmit = (data: FormDataType) => {
    console.log("Form submitted");
    console.log(data);
    methods.reset();
  };

  // Debugging validation errors
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onError = (errors:any) => {
    console.error("Validation errors:", errors);
  };

  //console.log(methods.watch())
  return (
    <div className="mx-auto w-full h-[35rem] p-2 max-sm:p-1 bg-white overflow-y-scroll no-scrollbar">
      <p className="text-lg text-black font-semibold">How would you like employers to contact you?</p>
      <div>
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onFSubmit,onError)} className="space-y-2 grid grid-cols-2 gap-3 content-center max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1">
            <Input name="name" label="Name" type="text" placeholder="Enter your name." />
            <Input name="email" label="Email" type="email" placeholder="Enter your e-mail." />
            <Input name="phone" label="Phone" type="number" placeholder="Enter your Phone Number." />
            <Input name="address" label="Address" type="text" placeholder="Mailing Address." />
            <Input name="city" label="City" type="text" placeholder="City." />
            <Input name="state" label="State" type="text" placeholder="State." />
            <div className=" flex w-full justify-between px-1 mt-2">
            <Button  name="Back" type="submit" purpose="back" />
            <Button  name="Save & Next" type="submit" purpose="save" />
            </div>
          </form>
        </FormProvider>
      </div>
    </div>
  );
};

export default Info;
