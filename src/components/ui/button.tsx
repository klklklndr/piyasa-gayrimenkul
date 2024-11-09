import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <button
      {...props}
      className={`px-4 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-600 transition ${
        props.className || ''
      }`}
    >
      {children}
    </button>
  );
};
