import { z } from "zod"

export const loginSchema = z.object({
  email: z
    .email("validation.email.invalid")
    .nonempty("validation.email.required"),
  password: z.string().nonempty("validation.password.required"),
})

export type ILoginSchema = z.infer<typeof loginSchema>
