import type { FallbackProps } from "react-error-boundary"

const ErrorLayout = ({ error }: FallbackProps) => {
  console.error("error layout", error)
  return <div>ErrorLayout</div>
}

export default ErrorLayout
