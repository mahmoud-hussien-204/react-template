import { cn } from "@/lib/utils"

type IProps = React.PropsWithChildren<React.HTMLAttributes<HTMLDivElement>>

const Container = ({ children, className, ...props }: IProps) => {
  return (
    <div className={cn("container mx-auto", className)} {...props}>
      {children}
    </div>
  )
}

export default Container
