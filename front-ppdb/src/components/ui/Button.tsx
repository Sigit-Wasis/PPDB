import React from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'danger' | 'success' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
  fullWidth?: boolean;
  outline?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  icon, 
  fullWidth, 
  outline,
  style,
  className,
  ...props 
}) => {
  const getVariantStyle = () => {
    if (outline) return `btn-outline btn-${variant}`;
    
    switch (variant) {
      case 'secondary': return 'btn-secondary';
      case 'danger': return 'btn-danger';
      case 'success': return 'btn-success';
      case 'outline': return 'btn-outline';
      default: return 'btn-primary';
    }
  };

  const getSizeStyle = () => {
    switch (size) {
      case 'sm': return { padding: '6px 12px', fontSize: '12px' };
      case 'lg': return { padding: '14px 28px', fontSize: '16px' };
      default: return {};
    }
  };

  return (
    <button 
      className={`btn ${getVariantStyle()} ${className || ''}`}
      style={{ 
        width: fullWidth ? '100%' : 'auto', 
        justifyContent: 'center',
        ...getSizeStyle(),
        ...style 
      }}
      {...props}
    >
      {icon && <span style={{ display: 'flex' }}>{icon}</span>}
      {children}
    </button>
  );
};

export default Button;
