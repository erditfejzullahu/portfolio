import {z} from "zod"

export const contactFormSchema = z.object({
    fullName: z.string({message: "Full name must be at least 5 characters long."}).min(5),
    email: z.string().email({message: "Please enter a valid email address."}),
    phoneNumber: z.coerce.number({message: "Please enter a valid phone number."}).min(9),
    subject: z.string({message: "Subject must be at least 10 characters long."}).min(10),
    message: z.string({message: "Please provide a brief summary of your inquiry."}),
    contactReason: z.enum(["Custom Software Development", "SaaS Development", "Web Application Development", "Mobile App Development", "UX/UI Design", "Legacy Software Modernization", "Maintenance and Support", "Consulting and Strategy"], {message: "Please select a reason for contact."})
})