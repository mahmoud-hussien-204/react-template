import { useForm, useFormState } from "react-hook-form"
import { useNavigate } from "react-router"
import { loginSchema, type ILoginSchema } from "../validations"
import { zodResolver } from "@hookform/resolvers/zod"
import { useMutation } from "@tanstack/react-query"
import { storage } from "@/lib/storage"
import { apiLogin } from "../api"

export const useLogin = () => {
  const navigate = useNavigate()

  const form = useForm<ILoginSchema>({
    resolver: zodResolver(loginSchema),
    mode: "onChange",
    defaultValues: {
      email: "",
      password: "",
    },
  })

  const formState = useFormState({
    control: form.control,
  })

  const { mutate, isPending } = useMutation({
    mutationFn: apiLogin,
    onSuccess: (response) => {
      storage.token.set(response.data.accessToken)
      navigate(`/${response.data.role}/dashboard`)
    },
  })

  const handleSubmit = form.handleSubmit((values) => {
    mutate(values)
  })

  const isDisabled = !formState.isDirty || !formState.isValid || isPending

  return {
    isPending,
    form,
    handleSubmit,
    isDisabled,
  }
}
