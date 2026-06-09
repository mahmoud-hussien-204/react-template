import { motion, type HTMLMotionProps, type Variants } from "framer-motion"

const pageVariants: Variants = {
  initial: {
    opacity: 0,
    // x: 20,
  },
  enter: {
    opacity: 1,
    // x: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
  exit: {
    opacity: 0,
    // x: -20,
    transition: {
      duration: 0.3,
      ease: "easeIn",
    },
  },
}

type IProps = React.PropsWithChildren & HTMLMotionProps<"div">

const AnimatedPage = ({ children, ...props }: IProps) => {
  return (
    <motion.div
      initial="initial"
      animate="enter"
      exit="exit"
      variants={pageVariants}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export default AnimatedPage
