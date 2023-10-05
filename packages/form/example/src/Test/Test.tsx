import { TextField } from "@mui/material";
import { useForm, useWatch } from "react-hook-form";

export default function App() {
  const { register, control, handleSubmit , watch} = useForm();
  const fieldNames = ["firstName", "lastName"];
  // const watchedValues = useWatch({
  //   control,
  //   name: fieldNames // watch fields passed as props
  // });

  // your custom function with watched values
  // const yourCustomFunction = () => {
  //   // console.log(watch());
  // }

  // Execute your custom function
  // yourCustomFunction();

  return (
    <form onSubmit={handleSubmit(data => console.log(data))}>
      <TextField {...register("firstName")} />
      <TextField {...register("lastName")} />
      <TextField {...register("email")} />
      <TextField type="submit" />
    </form>
  );
}
