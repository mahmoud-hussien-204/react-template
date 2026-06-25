import { Input as InputPrimitive } from "@base-ui/react/input"
import { cn } from "@/lib/utils"
import { Field, FieldError, FieldLabel } from "./field"
import {
  Controller,
  type ControllerProps,
  type FieldValues,
} from "react-hook-form"
import { useState } from "react"
import { EyeIcon, EyeOffIcon } from "lucide-react"

type IProps = React.ComponentProps<"input">

function Input({ className, type, ...props }: IProps) {
  return (
    <InputPrimitive
      type={type}
      data-slot="input"
      className={cn(
        "h-11 w-full min-w-0 rounded-md bg-input px-2.5 py-1 text-base transition-colors outline-none md:text-sm dark:bg-input/30",
        "border-input-border border focus-visible:border-primary",
        "aria-invalid:border-destructive dark:aria-invalid:border-destructive/50",
        "disabled:pointer-events-none disabled:cursor-not-allowed disabled:bg-input/50 disabled:opacity-50 dark:disabled:bg-input/80",
        "placeholder:text-sm placeholder:text-muted-foreground",
        className
      )}
      {...props}
    />
  )
}

export { Input }

// ****** Field input *********
interface IInputFieldProps<T extends FieldValues> extends Omit<
  ControllerProps<T>,
  "render"
> {
  fieldLabelProps: React.ComponentProps<typeof FieldLabel>
  inputProps: IProps
}
export function InputField<T extends FieldValues>({
  fieldLabelProps,
  inputProps,
  ...props
}: IInputFieldProps<T>) {
  return (
    <Controller
      {...props}
      render={({ field, fieldState }) => (
        <Field data-invalid={fieldState.invalid}>
          <FieldLabel {...fieldLabelProps} />
          {inputProps.type === "password" ? (
            <InputPasswordWrapper>
              {(showPassword) => (
                <Input
                  {...field}
                  {...inputProps}
                  type={showPassword ? "text" : "password"}
                  aria-invalid={fieldState.invalid}
                />
              )}
            </InputPasswordWrapper>
          ) : (
            <Input
              {...field}
              {...inputProps}
              aria-invalid={fieldState.invalid}
            />
          )}
          {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
        </Field>
      )}
    />
  )
}

const InputPasswordWrapper = ({
  children,
}: {
  children: (showPassword: boolean) => React.JSX.Element
}) => {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className="relative">
      {children(showPassword)}
      <div className="absolute inset-e-3 top-1/2 -translate-y-1/2 cursor-pointer">
        {showPassword ? (
          <EyeIcon onClick={() => setShowPassword(false)} size={14} />
        ) : (
          <EyeOffIcon onClick={() => setShowPassword(true)} size={14} />
        )}
      </div>
    </div>
  )
}
