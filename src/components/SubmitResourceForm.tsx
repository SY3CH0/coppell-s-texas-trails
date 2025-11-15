import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import { Send, Heart } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(100),
  category: z.string().min(2, "Category is required").max(50),
  description: z.string().min(10, "Description must be at least 10 characters").max(500),
  address: z.string().min(5, "Address is required").max(200),
  phone: z.string().min(10, "Valid phone number is required").max(20),
  website: z.string().url("Must be a valid URL").max(255),
  hours: z.string().min(3, "Hours are required").max(100),
  services: z.string().min(3, "Please list at least one service").max(500),
  submitterName: z.string().min(2, "Your name is required").max(100),
  submitterEmail: z.string().email("Valid email is required").max(255),
});

const SubmitResourceForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      category: "",
      description: "",
      address: "",
      phone: "",
      website: "",
      hours: "",
      services: "",
      submitterName: "",
      submitterEmail: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    console.log("Form submitted:", values);
    
    toast.success("Resource Submitted!", {
      description: "Thank you for contributing to the Coppell community. We'll review your submission shortly.",
    });
    
    form.reset();
    setIsSubmitting(false);
  };

  return (
    <section id="submit" className="py-32 px-4 relative overflow-hidden">
      {/* Organic Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-0 w-[800px] h-[800px] bg-primary/10 rounded-full blur-3xl animate-float-slow" />
        <div className="absolute bottom-1/4 left-0 w-[700px] h-[700px] bg-primary/5 rounded-full blur-3xl animate-float-delayed" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl animate-pulse-glow" />
      </div>
      
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-16 animate-fadeIn">
          <Badge className="mb-6 bg-primary/15 text-primary border-2 border-primary/30 px-6 py-3 text-base font-serif rounded-full inline-flex items-center gap-2">
            <Heart className="w-4 h-4 fill-primary/50" />
            <span>Share a Resource</span>
          </Badge>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 font-serif">
            <span className="text-foreground">Strengthen Our </span>
            <span className="text-primary">Community</span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-light">
            Know a valuable local resource? Help your neighbors by sharing it with our community
          </p>
        </div>

        <Card className="border-2 border-border bg-card/60 backdrop-blur-md rounded-[3rem] glow-soft overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5 pointer-events-none" />
          
          <CardHeader className="relative z-10 text-center pb-8">
            <CardTitle className="text-3xl font-bold font-serif">Resource Information</CardTitle>
            <CardDescription className="text-lg font-light">
              Fill out the details below and we'll review your submission
            </CardDescription>
          </CardHeader>
          <CardContent className="relative z-10">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                {/* Resource Details */}
                <div className="space-y-6">
                  <div className="flex items-center gap-3 pb-2">
                    <div className="h-1 w-12 bg-primary rounded-full" />
                    <h3 className="text-xl font-semibold text-primary font-serif">Resource Details</h3>
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-base font-medium">Resource Name *</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Coppell Community Center" 
                            {...field} 
                            className="h-12 bg-input/50 border-2 rounded-2xl"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="category"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-base font-medium">Category *</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="e.g., Non-Profits, Health Services, Education" 
                            {...field} 
                            className="h-12 bg-input/50 border-2 rounded-2xl"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-base font-medium">Description *</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Provide a brief description of the resource and its services..." 
                            className="min-h-28 bg-input/50 border-2 rounded-2xl resize-none"
                            {...field} 
                          />
                        </FormControl>
                        <FormDescription className="font-light">
                          Minimum 10 characters, maximum 500 characters
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="address"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-base font-medium">Address *</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="123 Main St, Coppell, TX 75019" 
                            {...field} 
                            className="h-12 bg-input/50 border-2 rounded-2xl"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="grid md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-base font-medium">Phone Number *</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="(972) 123-4567" 
                              {...field} 
                              className="h-12 bg-input/50 border-2 rounded-2xl"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="website"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-base font-medium">Website *</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="https://example.com" 
                              {...field} 
                              className="h-12 bg-input/50 border-2 rounded-2xl"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="hours"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-base font-medium">Hours of Operation *</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Mon-Fri: 9AM-5PM" 
                            {...field} 
                            className="h-12 bg-input/50 border-2 rounded-2xl"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="services"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-base font-medium">Services Offered *</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="List the main services offered (comma-separated)" 
                            className="min-h-24 bg-input/50 border-2 rounded-2xl resize-none"
                            {...field} 
                          />
                        </FormControl>
                        <FormDescription className="font-light">
                          Separate multiple services with commas
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Submitter Information */}
                <div className="space-y-6 pt-6 border-t-2 border-border/50">
                  <div className="flex items-center gap-3 pb-2">
                    <div className="h-1 w-12 bg-primary rounded-full" />
                    <h3 className="text-xl font-semibold text-primary font-serif">Your Information</h3>
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="submitterName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-base font-medium">Your Name *</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="John Doe" 
                            {...field} 
                            className="h-12 bg-input/50 border-2 rounded-2xl"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="submitterEmail"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-base font-medium">Your Email *</FormLabel>
                        <FormControl>
                          <Input 
                            type="email" 
                            placeholder="john@example.com" 
                            {...field} 
                            className="h-12 bg-input/50 border-2 rounded-2xl"
                          />
                        </FormControl>
                        <FormDescription className="font-light">
                          We'll use this to contact you about your submission
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <Button 
                  type="submit" 
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-3xl py-8 text-xl font-semibold glow-soft hover:glow-effect transition-all duration-300 group"
                >
                  {isSubmitting ? (
                    "Submitting..."
                  ) : (
                    <>
                      <Send className="w-6 h-6 mr-3 group-hover:rotate-12 transition-transform" />
                      Submit Resource
                    </>
                  )}
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default SubmitResourceForm;
