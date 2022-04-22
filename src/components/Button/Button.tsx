import * as React from 'react'
import { FC } from 'react'

import styles from './Button.module.scss'


interface buttonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: string,
}

const Button: FC<buttonProps> = ({ variant = 'default', children, ...props }) => {

  return (
    <button
      className={`
      ${styles.button}
      ${variant === 'primary' ? styles.primary : ''}
      ${variant === 'secondary' ? styles.secondary : ''}
      `}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button