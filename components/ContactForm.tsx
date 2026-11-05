"use client"

import React, { useCallback, useState } from "react"
import { useForm } from "react-hook-form"
import { contactFormSchema } from "@/lib/validations"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "./ui/form"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { RadioGroup, RadioGroupItem } from "./ui/radio-group"
import { toast } from "sonner"
import { countryPhoneCodes } from "@/utils/countryCodes"
import { Textarea } from "./ui/textarea"

const RADIO_OPTIONS = [
  "Custom Software Development",
  "SaaS Development",
  "Web Application Development",
  "Mobile App Development",
  "UX/UI Design",
  "Legacy Software Modernization",
  "Maintenance and Support",
  "Consulting and Strategy"
];

const ContactForm = () => {
  const [flagEmoji, setFlagEmoji] = useState<string | null>(null);

  const form = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phoneNumber: "",
      subject: "",
      message: "",
      contactReason: "Custom Software Development"
    }
  });

  const handlePhoneChange = useCallback((input: string) => {
    const foundCode = Object.keys(countryPhoneCodes).find(code => input.startsWith(code));
    const countryCode = foundCode ? countryPhoneCodes[foundCode] : null;
    setFlagEmoji(countryCode ? [...countryCode].map(char => String.fromCodePoint(char.charCodeAt(0) + 127397)).join('') : null);
  }, []);

  const onSubmit = useCallback(async (data: z.infer<typeof contactFormSchema>) => {
    try {
      const response = await fetch("/api/email", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(data)
      });

      if (response.ok) {
        form.reset();
        setFlagEmoji(null);
        toast.success("Email sent successfully", {
          description: "I will contact you ASAP!"
        });
      } else if (response.status === 429) {
        toast.error("Please wait before submitting again", {
          description: "Try again in a few minutes.",
        });
      } else if (response.status === 503) {
        toast.error("Contact form temporarily unavailable", {
          description: "Please try again later.",
        });
      } else {
        toast.error("Something went wrong", {
          description: "Please check your details and try again.",
        });
      }
    } catch (error) {
      console.error(error);
      toast.error("Network error", {
        description: "Please check your connection and try again.",
      });
    }
  }, [form]);

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 mt-10" noValidate>
        <div className="flex flex-row gap-2 max-md:flex-col max-md:gap-4">
          <FormField
            control={form.control}
            name="fullName"
            render={({field}) => (
              <FormItem className="flex-1">
                <FormLabel>Full Name</FormLabel>
                <FormControl>
                  <Input
                    autoComplete="name"
                    maxLength={100}
                    className="max-md:placeholder:text-sm max-md:text-sm"
                    placeholder="Enter your full name"
                    {...field}
                  />
                </FormControl>
                <FormDescription className="max-md:text-sm">
                  Here&apos;s how you&apos;ll be introduced to me.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({field}) => (
              <FormItem className="flex-1">
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    autoComplete="email"
                    className="max-md:placeholder:text-sm max-md:text-sm"
                    type="email"
                    maxLength={254}
                    placeholder="Enter your email"
                    {...field}
                  />
                </FormControl>
                <FormDescription className="max-md:text-sm">
                  From this email you&apos;ll hear from me.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="flex flex-row gap-2 max-md:flex-col max-md:gap-4">
          <FormField
            control={form.control}
            name="subject"
            render={({field}) => (
              <FormItem className="flex-1">
                <FormLabel>Subject</FormLabel>
                <FormControl>
                  <Input
                    className="max-md:placeholder:text-sm max-md:text-sm"
                    maxLength={150}
                    placeholder="Enter your subject"
                    {...field}
                  />
                </FormControl>
                <FormDescription className="max-md:text-sm">
                  Briefly describe the reason for your contact.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phoneNumber"
            render={({field}) => (
              <FormItem className="flex-1">
                <FormLabel>Phone Number</FormLabel>
                <div className="relative flex items-center">
                  {flagEmoji && <div className="absolute left-2 text-2xl">{flagEmoji}</div>}
                  <FormControl>
                    <Input
                      className={`${flagEmoji ? "pl-9" : ""} transition-all duration-100 max-md:placeholder:text-sm max-md:text-sm`}
                      type="tel"
                      placeholder="Enter your full phone number"
                      {...field}
                      onChange={(event) => {
                        field.onChange(event);
                        handlePhoneChange(event.target.value);
                      }}
                    />
                  </FormControl>
                </div>
                <FormDescription className="max-md:text-sm">
                  Enter full number with prefix. (eg. +383)
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="contactReason"
          render={({field}) => (
            <FormItem>
              <FormLabel>Select the Service You&apos;re Interested In</FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  value={field.value}
                  className="grid grid-cols-2 items-center mt-2 max-[558px]:grid-cols-1"
                >
                  {RADIO_OPTIONS.map((option) => (
                    <FormItem key={option} className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value={option}/>
                      </FormControl>
                      <FormLabel className="font-normal text-base max-md:text-sm">
                        {option}
                      </FormLabel>
                    </FormItem>
                  ))}
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({field}) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea
                  className="max-md:placeholder:text-sm max-md:text-sm"
                  rows={5}
                  maxLength={5000}
                  placeholder="Tell me about your project, goals, and any specific requirements you have."
                  {...field}
                />
              </FormControl>
              <FormDescription className="max-md:text-sm">
                Provide as many details as possible about your project, timeline, and expectations. This helps me understand your needs better and offer the best possible solution.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" disabled={form.formState.isSubmitting}>
          {form.formState.isSubmitting ? "Sending..." : "Submit"}
        </Button>
      </form>
    </Form>
  );
};

export default React.memo(ContactForm);
