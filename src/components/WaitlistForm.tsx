
import React from 'react';
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { toast } from "sonner";

interface WaitlistFormValues {
  email: string;
  name: string;
  role: string;
}

const WaitlistForm = () => {
  const form = useForm<WaitlistFormValues>({
    defaultValues: {
      email: "",
      name: "",
      role: "",
    },
  });

  const onSubmit = (data: WaitlistFormValues) => {
    console.log("Form submitted:", data);
    toast.success("You've been added to the waitlist!", {
      description: "We'll notify you when snips.dev launches.",
    });
    form.reset();
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white">Name</FormLabel>
                <FormControl>
                  <Input placeholder="John Doe" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white">Email</FormLabel>
                <FormControl>
                  <Input placeholder="john@example.com" type="email" {...field} />
                </FormControl>
                <FormDescription className="text-snips-muted">
                  We'll never share your email with anyone else.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="role"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white">Role</FormLabel>
                <FormControl>
                  <Input placeholder="Developer, Designer, Student..." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" className="w-full bg-snips-border hover:bg-snips-border/80">
            Join Waitlist
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default WaitlistForm;
