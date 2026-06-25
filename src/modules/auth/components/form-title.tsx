interface IProps {
  title: React.ReactNode
  subtitle: React.ReactNode
}

const FormTitle = ({ subtitle, title }: IProps) => {
  return (
    <div className="mb-8 flex flex-col gap-1.5">
      <h1 className="text-2xl">{title}</h1>
      <h4 className="text-Text-T-500">{subtitle}</h4>
    </div>
  )
}

export default FormTitle
