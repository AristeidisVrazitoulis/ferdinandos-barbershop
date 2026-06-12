export default function Container({ children, className = "" }) {
  return (
    <div className={`max-w-300 mx-auto ${className}`}>
      {children}
    </div>
  );
}
