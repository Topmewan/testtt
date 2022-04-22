import * as React from "react"
import { FC, ReactChild, ReactNode } from 'react'

import styles from './Page.module.scss'

interface pageProps{
  children:ReactNode | ReactChild
}
const Page:FC<pageProps> = ({children}) => {
  return (
    <div className={styles.wrapper}>
      {children}
    </div>
  )
}

export default Page