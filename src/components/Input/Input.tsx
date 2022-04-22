import * as React from 'react'
import styles from './Input.module.scss'
import { FC } from 'react'


interface InputProps extends React.HTMLProps<HTMLInputElement> {
  isActive: boolean,

}

const Input: FC<InputProps> = ({ label, type, isActive, ...props }) => {

  return (
    <div className={styles.wrapper}>
      <label>{label}</label>
      <input
        className={`
        ${styles.input} 
        ${isActive ? styles.disabled : ''}
        `}
        {...props}
      />
    </div>
  )
}

export default Input