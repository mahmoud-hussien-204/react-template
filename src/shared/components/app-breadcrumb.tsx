import { cn } from "@/lib/utils"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "./ui/breadcrumb"
import { Link } from "react-router"

interface IProps {
  data: { link?: string; label: string; className?: string }[]
}

const AppBreadcrumb = ({ data }: IProps) => {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        {data.map((item, index) => (
          <>
            <BreadcrumbItem
              key={`item-${index}`}
              className={cn(item.className)}
            >
              {item?.link ? (
                <BreadcrumbLink render={<Link to={item.link} />}>
                  {item.label}
                </BreadcrumbLink>
              ) : (
                <BreadcrumbPage>{item.label}</BreadcrumbPage>
              )}
            </BreadcrumbItem>
            {index < data.length - 1 && (
              <BreadcrumbSeparator
                key={`separator-${index}`}
                className="hidden md:block"
              />
            )}
          </>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  )
}

export default AppBreadcrumb
