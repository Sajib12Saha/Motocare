'use client'
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "./ui/button";
import { Loader2, Send } from "lucide-react";
import CustomFormField from "./ui/custom-form";
import { toast } from "sonner";
import { useState } from "react";
import { Form } from "./ui/form";


const contactSchema = z.object({
  name: z.string().nonempty("Name is required").min(3, "Name must be at least 3 characters"),
  email: z.string().nonempty("Email is required").email("Invalid email format"),
  message: z.string().nonempty("Message is required").min(4, "Message must be at least 4 characters"),
});

export const ContactForm = () => {
  const [isPending, setIsPending] = useState(false);

  const form = useForm<z.infer<typeof contactSchema>>({
    resolver: zodResolver(contactSchema),
    defaultValues:{
        name: "",
        email: "",
        message: "",
    }
  });

  const submitMessage = async (data: z.infer<typeof contactSchema>) => {
    setIsPending(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      console.log(data);
      toast.success("Thank you for your message.", {
        description: "You will receive a response soon...",
        position: "top-left",
      });
    } catch (error) {
      toast.error("Something went wrong. Please try again.", {
        position: "top-left",
      });
    } finally {
      setIsPending(false);
      form.reset()
    }
  };

  return (
    <div className="py-28 px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
        <div className="flex flex-col gap-y-4 items-start justify-center w-full">
          <h2 className="text-3xl font-bold">Get In Touch!</h2>
          <p className="text-sm text-muted-foreground">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, atque.
          </p>
          <Form {...form} >
          <form onSubmit={form.handleSubmit(submitMessage)} className="w-full space-y-8">
            {/* Name Field */}
            <CustomFormField
              name="name"
              label="Name"
              placeholder="Enter your name"
              register={form.register}
              errors={form.formState.errors}
              control={form.control} // Pass control from useForm hook
              type="input"
            />

            {/* Email Field */}
            <CustomFormField
              name="email"
              label="Email"
              type="input"
              placeholder="Enter your email"
              register={form.register}
              errors={form.formState.errors}
              control={form.control}
            />

            {/* Message Field */}
            <CustomFormField
              name="message"
              label="Message"
              type="textarea"
              placeholder="Write your message..."
              register={form.register}
              errors={form.formState.errors}
              control={form.control}
            />

            {/* Submit Button */}
            <Button type="submit" disabled={isPending} className="w-full flex items-center gap-2">
              {isPending ? (
                <Loader2 className="animate-spin size-7" />
              ) : (
                <>
                  Send <Send />
                </>
              )}
            </Button>
          </form>
          </Form>
        </div>
       
      </div>
    </div>
  );
};
