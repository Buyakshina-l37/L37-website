interface ButtonProps {
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'ghost'
  className?: string
  onClick?: () => void
}

export default function Button({ children, variant = 'primary', className = '', onClick }: ButtonProps) {
  return (
    <button onClick={onClick} className={className}>
      {children}
    </button>
  )
}
