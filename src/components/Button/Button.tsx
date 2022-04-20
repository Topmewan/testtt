import * as React from 'react'
import styles from './Button.module.scss'
import { FC, ReactNode } from 'react'

interface buttonProps {
  children: ReactNode
}

const Button: FC<buttonProps> = ({ children }) => {
  return (
    <button>
      {children}
    </button>

  )
}

export default Button