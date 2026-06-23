import { cn } from "@/lib/utils"
import { useI18n } from "@/shared/hooks/use-i18n"

const PatternsIcon = () => {
  const { isRtl } = useI18n()

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="382"
      height="372"
      fill="none"
      viewBox="0 0 382 372"
      className={cn("absolute inset-s-0 bottom-0", isRtl ? "rotate-y-180" : "")}
    >
      <g
        stroke="#F1F2F7"
        strokeLinecap="round"
        strokeMiterlimit="10"
        opacity="0.95"
      >
        <path d="M158.57 51.218H66.428v92.142h92.142zM335.768 51.218h-92.142v92.142h92.142zM158.57 223.429H66.428v92.142h92.142zM335.768 223.429h-92.142v92.142h92.142zM-16.86 97.559h83.006M158.854 97.559h83.006M-16.86 270.039h83.006M158.854 270.039h83.006M289.831 223.146v-79.772M289.831 395.626v-79.772M111.961 223.146v-79.772M111.961 395.626v-79.772"></path>
      </g>
    </svg>
  )
}

export default PatternsIcon
