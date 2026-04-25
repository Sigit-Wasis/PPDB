import React from 'react'

interface CardProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
  icon?: React.ReactNode;
  className?: string;
  padding?: string | number;
  noPadding?: boolean;
  style?: React.CSSProperties;
}

const Card: React.FC<CardProps> = ({ 
  children, 
  title, 
  description, 
  icon,
  className, 
  padding, 
  noPadding,
  style
}) => {
  return (
    <div className={`table-container ${className || ''}`} style={{ padding: noPadding ? 0 : (padding || '24px'), ...style }}>
      {(title || description) && (
        <div style={{ marginBottom: '24px' }}>
          {title && (
            <h3 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '4px', display: 'flex', alignItems: 'center', gap: '10px' }}>
              {icon && <span style={{ display: 'flex', color: 'var(--accent)' }}>{icon}</span>}
              {title}
            </h3>
          )}
          {description && <p style={{ fontSize: '14px', color: 'var(--text-muted)' }}>{description}</p>}
        </div>
      )}
      {children}
    </div>
  );
};

export default Card;
