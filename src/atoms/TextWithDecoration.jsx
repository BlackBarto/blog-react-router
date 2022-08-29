export default function TextWithDecoration({children, className: color}) {
  return (
    <span className={`${color} underline decoration-4`}>{children}</span>
  )
}