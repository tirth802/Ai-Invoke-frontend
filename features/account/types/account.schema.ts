
import z from "zod";

export const accountSchema = z.object({
    name:z.string().min(2," Name is required"),
    email:z.string().email("Invalid email"),
    signature:z.string().optional()
})

export type AccountFormData = z.infer<typeof accountSchema>