import { z } from "zod"

export const loginSchema = z.object({
  email: z
    .email("validations.email.invalid")
    .nonempty("validations.email.required"),
  password: z.string().nonempty("validations.password.required"),
})

export type ILoginSchema = z.infer<typeof loginSchema>
