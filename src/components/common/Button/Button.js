const Button = ({ children, color, onClick, className, disabled, style }) => {
  
  return (
    <button
      className={className}
      onClick={onClick}
      disabled={disabled}
      style={{ padding: 10, color: color, ...style }}
    >
      {children}
    </button>
  );
};

export default Button;
