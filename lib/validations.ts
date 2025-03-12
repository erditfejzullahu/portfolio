import {z} from "zod"
import {parsePhoneNumberFromString} from "libphonenumber-js"

const phoneSchema = z
  .string()
  .trim()
  .regex(/^\+?\d{9,25}$/, { message: "Please enter a valid phone number (9-25 digits)." });


export const contactFormSchema = z.object({
    fullName: z.string({message: "Enter your full name."}).min(5, {message: "Full name must be at least 5 characters long."}),
    email: z.string({message:"Enter your email address."}).email({message: "Please enter a valid email address."}),
    phoneNumber: z.string().refine((num) => {
        const phoneNumber = parsePhoneNumberFromString(num);
        return phoneNumber && phoneNumber.isValid();
    }, {message: "Invalid phone number format"}),
    subject: z.string({message: "Please enter a subject."}).min(10, {message: "Subject must be at least 10 characters long."}),
    message: z.string({message: "Please provide a brief summary of your inquiry."}).min(20, {message: "Try to describe your idea in more detail—at least 20 characters."}),
    contactReason: z.enum(["Custom Software Development", "SaaS Development", "Web Application Development", "Mobile App Development", "UX/UI Design", "Legacy Software Modernization", "Maintenance and Support", "Consulting and Strategy"], {message: "Please select a reason for contact."})
})