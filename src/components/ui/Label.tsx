interface LabelProps {
  children: React.ReactNode
  className?: string
}

export default function Label({ children, className = '' }: LabelProps) {
  return (
    <span className={className}>
      {children}
    </span>
  )
}
