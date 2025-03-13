"use client"
import React, { useState } from 'react'
import WordAnimation from './WordAnimation'
import Link from 'next/link'
import { CgArrowBottomLeft } from 'react-icons/cg'
import Image from 'next/image'
import { images } from '@/constants'
import { useForm } from "react-hook-form"
import { contactFormSchema } from '@/lib/validations'
import {zodResolver} from "@hookform/resolvers/zod";
import * as z from "zod"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from './ui/form'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { RadioGroup, RadioGroupItem } from './ui/radio-group'
import { toast } from 'sonner'
import { countryPhoneCodes } from '@/utils/countryCodes'
import { Textarea } from './ui/textarea'

const Contact = () => {

  const [flagEmoji, setFlagEmoji] = useState<string | null>(null)
  const [readMore, setReadMore] = useState<boolean>(true)

  const getFlagEmoji = (countryCode: string | null) => {
    if(!countryCode) return null;
    console.log(countryCode);
    
    return [...countryCode].map(char => String.fromCodePoint(char.charCodeAt(0) + 127397)).join('');
  }

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
  })

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;
    const foundCode = Object.keys(countryPhoneCodes).find(code => input.startsWith(code));
    const countryCode = foundCode ? countryPhoneCodes[foundCode] : null;
    setFlagEmoji(countryCode ? getFlagEmoji(countryCode) : null);
    form.setValue("phoneNumber", input);
  }

  const onSubmit = async (data: z.infer<typeof contactFormSchema>) => {
    try {
      const response = await fetch("/api/email", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(data)
      });

      const result = await response.json();
      if(response.ok){
        toast.success("Email sent successfully", {
          description: "I will contact you ASAP!"
        })
      }else {
        toast.error("Something went wrong", {
          description: "Please try again!",
        })
      }
    } catch (error) {
      console.error(error);

    }  
  }

  return (
    <div className="relative my-20 max-md:my-10 w-screen before:hidden container mx-auto px-4 " id='contact-me'>
      <div className="flex flex-row items-end justify-between max-lg:flex-col">
        <div className="max-lg:mr-auto">
          <div className="flex-row flex items-center gap-10 max-[443px]:gap-6 max-[422px]:gap-3">
            <div className="max-[410px]:hidden">
              <WordAnimation text='02. Unleash it' textClasses='uppercase font-black! max-[427px]:font-medium! text-lg! max-[768px]:text-base! max-[500px]:text-sm!'/>
            </div>
            <div className="max-[410px]:block hidden">
              <WordAnimation text='02.' textClasses='uppercase font-black! max-[427px]:font-medium! text-lg! max-[768px]:text-base! max-[500px]:text-sm!'/>
            </div>
            <div>
              <WordAnimation text="Let's Connect" textClasses='text-6xl! max-md:text-3xl! font-bold! uppercase' spanTextClasses='hover:text-6xl! max-md:hover:text-4xl! transition-all'/>
            </div>
          </div>
          <div>
              <WordAnimation text='and grow' textClasses='text-6xl! max-md:text-3xl! font-light! uppercase' spanTextClasses='hover:text-6xl! max-md:hover:text-4xl! transition-all [&:nth-child(2)]:font-bold! [&:nth-child(3)]:font-bold!' stagger={0.6}/>
          </div>
        </div>
        <div>
          <Link href={"#contact-form"} className="flex group flex-row animate-fadeIn items-center gap-2 cursor-pointer word-element relative z-10">
              <span className="text-xl font-bold text-black group-hover:text-2xl transition-all max-md:text-base">Request a Consultation.</span>
              <CgArrowBottomLeft size={30} className="border-2 group-hover:size-10 transition-all" />
          </Link>
        </div>
      </div>

      <div className="mt-10 max-md:mt-5 p-4 relative z-10 shadow-lg shadow-[rgba(0,0,0,0.15)] custom-shape before:skew-y-[-5deg]! before:skew-x-[-15deg]!">
        <div className="absolute animate-heroImg -top-20 -right-32 z-20 rounded-lg rotate-20 shadow-xl hover:translate-x-6 transition-all px-8 py-2 " style={{background: "rgba(0,0,0,0.05)"}}>     
            <Image src={images.contactus1} alt='about2' className="size-32"/>
        </div>
        <div className="absolute animate-heroImg top-0 -left-32 z-20 rounded-lg rotate-20 shadow-xl hover:translate-x-6 transition-all px-8 py-2 " style={{background: "rgba(0,0,0,0.05)"}}>     
            <Image src={images.contactus2} alt='about2' className="size-32"/>
        </div>
        <p className={`animate-fadeInRight text-base text-gray-600 ${readMore ? "max-md:line-clamp-3" : ""} `}>
        Looking to build a cutting-edge website, a high-performance mobile app, or a custom software solution tailored to your needs? <br /> <br /> I'm here to turn your vision into reality with innovative development, seamless functionality, and expert guidance every step of the way. Reach out today and let's collaborate on creating something truly exceptional!
        </p>
        <button onClick={() => setReadMore(!readMore)} className="px-4 py-2 shadow-lg shadow-gray-300 max-md:block hidden">{readMore ? "Read More" : "Read Less"}</button>
      </div>


      {/* form  */}
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 mt-10" id='contact-form'>
          <div className="flex flex-row gap-2 max-md:flex-col max-md:gap-4">
            <FormField 
              control={form.control}
              name="fullName"
              render={({field}) => (
                <FormItem className="flex-1">
                  <FormLabel>Full Name</FormLabel>
                  <FormControl>
                    <Input className="max-md:placeholder:text-sm max-md:text-sm" placeholder='Enter your full name' {...field}/>
                  </FormControl>
                  <FormDescription className='max-md:text-sm'>
                    Here's how you'll be introduced to me.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({field}) => (
                <FormItem className='flex-1'>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input className='max-md:placeholder:text-sm max-md:text-sm' placeholder='Enter your email' {...field}/>
                  </FormControl>
                  <FormDescription className='max-md:text-sm'>
                    From this email you'll hear from me.
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
                    <Input className="max-md:placeholder:text-sm max-md:text-sm" placeholder='Enter your subject' {...field}/>
                  </FormControl>
                  <FormDescription className='max-md:text-sm'>
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
                <FormItem className='flex-1'>
                  <FormLabel>Phone Number</FormLabel>
                  <div className="relative flex items-center">
                    {flagEmoji && <div className="absolute left-2 text-2xl">{flagEmoji}</div>}
                  <FormControl>
                    <Input className={`${flagEmoji ? "pl-9" : ""} transition-all duration-100 max-md:placeholder:text-sm max-md:text-sm`} type="tel" placeholder='Enter your full phone number' {...field} onInput={handlePhoneChange}/>
                  </FormControl>
                  </div>
                  <FormDescription className='max-md:text-sm'>
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
                <FormLabel>Select the Service You're Interested In</FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="grid grid-cols-2 items-center mt-2 max-[558px]:grid-cols-1"
                  >
                    {["Custom Software Development", "SaaS Development", "Web Application Development", "Mobile App Development", "UX/UI Design", "Legacy Software Modernization", "Maintenance and Support", "Consulting and Strategy"].map((option) => (
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
                    <Textarea className="max-md:placeholder:text-sm max-md:text-sm" rows={5} placeholder='Tell me about your project, goals, and any specific requirements you have.' {...field}/>
                </FormControl>
                <FormDescription className='max-md:text-sm'>
                  Provide as many details as possible about your project, timeline, and expectations. This helps me understand your needs better and offer the best possible solution.
                </FormDescription>
              </FormItem>
            )}
          />
          <Button type='submit'>Submit</Button>
        </form>
      </Form>

    </div>
  )
}

export default Contact