
import React from 'react';
import { Link } from 'react-router-dom';
import BrowserHeader from '@/components/BrowserHeader';
import SocialLinks from '@/components/SocialLinks';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';

interface ContactFormValues {
  name: string;
  email: string;
  message: string;
}

const Contact = () => {
  const form = useForm<ContactFormValues>({
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  const onSubmit = (data: ContactFormValues) => {
    console.log('Contact form submitted:', data);
    toast.success('Message sent!', {
      description: 'We will get back to you as soon as possible.',
    });
    form.reset();
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-10">
      <div className="text-xl md:text-2xl text-white mb-10 font-mono">
        snips.dev &lt;contact&gt;
      </div>
      
      <div className="w-full max-w-3xl border border-snips-border rounded-lg shadow-lg mb-8">
        <BrowserHeader />
        <div className="flex flex-col items-center justify-start py-12 px-6 bg-snips-dark">
          <h1 className="text-3xl md:text-4xl font-bold text-white font-mono mb-6">
            Contact Us
          </h1>
          
          <div className="w-full max-w-md mx-auto">
            <p className="text-snips-muted text-center mb-8">
              Have questions or feedback about snips.dev? We'd love to hear from you! Fill out the form below and we'll get back to you as soon as possible.
            </p>
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Your name" {...field} />
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
                        <Input placeholder="your.email@example.com" type="email" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">Message</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="What would you like to tell us?" 
                          className="min-h-[120px]" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button type="submit" className="w-full bg-snips-border hover:bg-snips-border/80">
                  Send Message
                </Button>
              </form>
            </Form>
          </div>
          
          <Link to="/" className="flex items-center gap-2 text-snips-muted hover:text-white mt-12 transition-colors duration-200">
            <ArrowLeft size={16} />
            <span>Back to Home</span>
          </Link>
        </div>
      </div>
      
      <SocialLinks />
    </div>
  );
};

export default Contact;
