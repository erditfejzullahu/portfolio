"use client"
import React from 'react'
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

const Contact = () => {
  const form = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phoneNumber: 0o44-536-900,
      subject: "",
      message: "",
      contactReason: "Web Application Development"
    }
  })

  const onSubmit = (data: z.infer<typeof contactFormSchema>) => {
    console.log(data);
  }
  return (
    <div className="relative my-20 w-screen before:hidden container mx-auto px-4 " id='contact-me'>
      <div className="flex flex-row items-end justify-between">
        <div>
          <div className="flex-row flex items-center gap-10">
            <div>
              <WordAnimation text='02. Unleash the potential' textClasses='uppercase font-black! text-lg!'/>
            </div>
            <div>
              <WordAnimation text="Let's Connect" textClasses='text-6xl! font-bold! uppercase' spanTextClasses='hover:text-6xl! transition-all'/>
            </div>
          </div>
          <div>
              <WordAnimation text='and grow' textClasses='text-6xl! font-light! uppercase' spanTextClasses='hover:text-6xl! transition-all [&:nth-child(2)]:font-bold! [&:nth-child(3)]:font-bold!' stagger={0.6}/>
          </div>
        </div>
        <div>
          <Link href={"#contact-form"} className="flex group flex-row animate-fadeIn items-center gap-2 cursor-pointer word-element relative z-10">
              <span className="text-xl font-bold text-black group-hover:text-2xl transition-all">Request a Consultation.</span>
              <CgArrowBottomLeft size={30} className="border-2 group-hover:size-10 transition-all" />
          </Link>
        </div>
      </div>

      <div className="mt-10  p-4 relative z-10 shadow-lg shadow-[rgba(0,0,0,0.15)] custom-shape before:skew-y-[-5deg]! before:skew-x-[-15deg]!">
        <div className="absolute animate-heroImg -bottom-50 -right-30 z-20 rounded-lg rotate-20 shadow-xl hover:translate-x-6 transition-all px-8 py-2 " style={{background: "rgba(0,0,0,0.05)"}}>     
            <Image src={images.javascript2} alt='about2' className="size-28"/>
        </div>
        <p className="animate-fadeInRight text-base text-gray-600">
        Looking to build a cutting-edge website, a high-performance mobile app, or a custom software solution tailored to your needs? <br /> <br /> I'm here to turn your vision into reality with innovative development, seamless functionality, and expert guidance every step of the way. Reach out today and let's collaborate on creating something truly exceptional!
        </p>
      </div>


      {/* form  */}
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 mt-10">
          <FormField 
            control={form.control}
            name="fullName"
            render={({field}) => (
              <FormItem>
                <FormLabel>Full Name</FormLabel>
                <FormControl>
                  <Input placeholder='Enter your full name' {...field}/>
                </FormControl>
                <FormDescription>
                  Here's how you'll be introduced to me.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex flex-row gap-2">
            <FormField
              control={form.control}
              name="email"
              render={({field}) => (
                <FormItem className='flex-1'>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder='Enter your email' {...field}/>
                  </FormControl>
                  <FormDescription>
                    From this email you'll hear from me.
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
                  <FormControl>
                    <Input type="tel" placeholder='Enter your phone number' {...field} />
                  </FormControl>
                  <FormDescription>
                    We will be contacting from this number.
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
                    className="grid grid-cols-2 items-center mt-2"
                  >
                    {["Custom Software Development", "SaaS Development", "Web Application Development", "Mobile App Development", "UX/UI Design", "Legacy Software Modernization", "Maintenance and Support", "Consulting and Strategy"].map((option) => (
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value={option}/>
                        </FormControl>
                        <FormLabel className="font-normal text-base">
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
          <Button type='submit'>Submit</Button>
        </form>
      </Form>

    </div>
  )
}

export default Contact