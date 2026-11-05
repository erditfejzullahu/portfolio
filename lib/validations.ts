import {z} from "zod"
import {parsePhoneNumberFromString} from "libphonenumber-js"

export const contactFormSchema = z.object({
    fullName: z.string({message: "Enter your full name."}).trim().min(1, {message: "Enter your full name."}).min(5, {message: "Full name must be at least 5 characters long."}).max(100, {message: "Full name must be no more than 100 characters."}),
    email: z.string({message:"Enter your email address."}).trim().min(1, {message: "Enter your email address."}).max(254, {message: "Email address must be no more than 254 characters."}).email({message: "Please enter a valid email address."}),
    phoneNumber: z.string({message: "Enter your phone number."}).trim().min(1, {message: "Enter your phone number."}).max(30, {message: "Phone number must be no more than 30 characters."}).refine((num) => {
        const phoneNumber = parsePhoneNumberFromString(num);
        return Boolean(phoneNumber?.isValid());
    }, {message: "Please enter a valid phone number, including its country code."}),
    subject: z.string({message: "Please enter a subject."}).trim().min(1, {message: "Please enter a subject."}).min(10, {message: "Subject must be at least 10 characters long."}).max(150, {message: "Subject must be no more than 150 characters."}).refine((subject) => !/[\r\n]/.test(subject), {message: "Subject must fit on one line."}),
    message: z.string({message: "Please provide a brief summary of your inquiry."}).trim().min(1, {message: "Please provide a brief summary of your inquiry."}).min(20, {message: "Try to describe your idea in more detail—at least 20 characters."}).max(5000, {message: "Message must be no more than 5,000 characters."}),
    contactReason: z.enum(["Custom Software Development", "SaaS Development", "Web Application Development", "Mobile App Development", "UX/UI Design", "Legacy Software Modernization", "Maintenance and Support", "Consulting and Strategy"], {message: "Please select a reason for contact."})
}).strict()