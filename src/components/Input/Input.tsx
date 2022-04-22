import * as React from 'react'
import styles from './Input.module.scss'
import { FC } from 'react'


interface InputProps extends React.HTMLProps<HTMLInputElement> {
  isActive: boolean,
  variant?: string

}

const Input: FC<InputProps> = ({ label, type, variant, isActive, ...props }) => {

  return (
    <div className={styles.wrapper}>
      <label>{label}</label>
      <input
        className={`
        ${styles.input} 
        ${variant === 'textarea' ? styles.textarea : ''} 
        ${isActive ? styles.disabled : ''}
        `}
        {...props}
      />
    </div>
  )
}

export default Input