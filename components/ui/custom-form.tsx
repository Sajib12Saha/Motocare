import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "./form";
import { Input } from "./input";
import { Textarea } from "./textarea";

interface CustomFormFieldProps {
  name: string;
  label: string;
  type: "input" | "textarea";
  placeholder: string;
  register: any;
  errors: any; 
  control: any;
}

const CustomFormField = ({
  name,
  label,
  type,
  placeholder,
  register,
  errors,
  control
  
}: CustomFormFieldProps) => {
  return (
    <FormField
      control={control} // Ensure you're passing control correctly
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            {type === "input" ? (
              <Input placeholder={placeholder} {...field} />
            ) : (
              <Textarea placeholder={placeholder} {...field} />
            )}
          </FormControl>
          <FormMessage>{errors[name]?.message}</FormMessage>
        </FormItem>
      )}
    />
  );
};

export default CustomFormField;
