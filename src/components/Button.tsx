import React from 'react';

interface ButtonProps {
  type: 'submit' | 'reset' | 'button'
  children: React.ReactElement
}

const Button = (props: ButtonProps) => {
  const { type } = props;
  return (
    <button
      type={type || "submit"}
      className="acme-button">
      {props.children}
    </button>
  )
} 

export default Button;
