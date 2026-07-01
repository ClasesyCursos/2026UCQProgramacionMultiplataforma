function DemoButton({ onClick, children }) {
  return (
    <button type="button" className="demo-btn" onClick={onClick}>
      {children}
    </button>
  )
}

export default DemoButton
