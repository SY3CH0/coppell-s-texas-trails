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
import { Send } from "lucide-react";

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
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    console.log("Form submitted:", values);
    
    toast.success("Resource Submitted!", {
      description: "Thank you for contributing to the Coppell community. We'll review your submission shortly.",
    });
    
    form.reset();
    setIsSubmitting(false);
  };

  return (
    <section id="submit" className="py-24 px-4 bg-gradient-to-b from-charcoal/30 to-background relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl animate-pulse-glow" />
      
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-12 animate-fadeIn">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/30 px-4 py-2">
            Submit a Resource
          </Badge>
          <h2 className="text-5xl font-bold mb-4">
            <span className="text-foreground">Help Us </span>
            <span className="text-primary">Grow Together</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Know of a valuable community resource? Share it with us to help strengthen our community network.
          </p>
        </div>

        <Card className="border-2 border-border bg-card/50 backdrop-blur-sm glow-effect">
          <CardHeader>
            <CardTitle className="text-2xl">Resource Information</CardTitle>
            <CardDescription>
              Fill out the form below to submit a new community resource for review
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                {/* Resource Details */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-primary">Resource Details</h3>
                  
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Resource Name *</FormLabel>
                        <FormControl>
                          <Input placeholder="Coppell Community Center" {...field} className="bg-input" />
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
                        <FormLabel>Category *</FormLabel>
                        <FormControl>
                          <Input placeholder="e.g., Non-Profits, Health Services, Education" {...field} className="bg-input" />
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
                        <FormLabel>Description *</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Provide a brief description of the resource and its services..." 
                            className="min-h-24 bg-input"
                            {...field} 
                          />
                        </FormControl>
                        <FormDescription>
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
                        <FormLabel>Address *</FormLabel>
                        <FormControl>
                          <Input placeholder="123 Main St, Coppell, TX 75019" {...field} className="bg-input" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="grid md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone Number *</FormLabel>
                          <FormControl>
                            <Input placeholder="(972) 123-4567" {...field} className="bg-input" />
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
                          <FormLabel>Website *</FormLabel>
                          <FormControl>
                            <Input placeholder="https://example.com" {...field} className="bg-input" />
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
                        <FormLabel>Hours of Operation *</FormLabel>
                        <FormControl>
                          <Input placeholder="Mon-Fri: 9AM-5PM" {...field} className="bg-input" />
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
                        <FormLabel>Services Offered *</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="List the main services offered (comma-separated)" 
                            className="min-h-20 bg-input"
                            {...field} 
                          />
                        </FormControl>
                        <FormDescription>
                          Separate multiple services with commas
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Submitter Information */}
                <div className="space-y-4 pt-6 border-t border-border">
                  <h3 className="text-lg font-semibold text-primary">Your Information</h3>
                  
                  <FormField
                    control={form.control}
                    name="submitterName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Your Name *</FormLabel>
                        <FormControl>
                          <Input placeholder="John Doe" {...field} className="bg-input" />
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
                        <FormLabel>Your Email *</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="john@example.com" {...field} className="bg-input" />
                        </FormControl>
                        <FormDescription>
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
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-6 text-lg font-semibold glow-effect hover:glow-strong transition-all duration-300"
                >
                  {isSubmitting ? (
                    "Submitting..."
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
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
