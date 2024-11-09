import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export const Card: React.FC<CardProps> = ({ children, className }) => {
  return (
    <div className={`bg-white shadow-md rounded-lg ${className || ''}`}>
      {children}
    </div>
  );
};

export const CardHeader: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <div className="px-6 py-4 border-b">{children}</div>;
};

export const CardContent: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <div className="px-6 py-4">{children}</div>;
};

export const CardFooter: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <div className="px-6 py-4 border-t">{children}</div>;
};
