import * as React from 'react'
import { FC } from 'react'
import styles from './Input.module.scss'

interface TextareaProps extends React.HTMLProps<HTMLTextAreaElement> {
  isActive: boolean
}

const Textarea: FC<TextareaProps> = ({ isActive, label, ...props }) => {
  return (
    <div className={styles.wrapper}>
      <label>{label}</label>
      <textarea
        className={`
        ${styles.textarea} 
        ${isActive ? styles.disabled : ''}
        `}
        {...props}
      />
    </div>
  )
}

export default Textarea