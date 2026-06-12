export default function Button({ children, href = "#", variant = "primary", className="" }) {
  const styles = {
    primary: 'bg-text-primary text-brand hover:bg-brand hover:text-text-primary',
    ghost:   'bg-transparent border border-text-primary text-text-primary hover:bg-text-primary hover:text-brand',
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`
        font-body font-semibold text-button
        tracking-button px-9 py-3.5
        transition-all duration-200
        rounded
        ${styles[variant]}
        ${className}
      `}
    >
      {children}
    </a>
  )
}
