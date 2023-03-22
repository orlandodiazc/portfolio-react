export default function Container({ children, className }) {
  return <div className={`max-w-4xl m-auto px-2 sm:px-6 ${className}`}>{children}</div>
}
