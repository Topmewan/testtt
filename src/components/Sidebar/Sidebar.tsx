import * as React from 'react'
import { useContext } from 'react'
import { IUsersContext, UsersContext } from '../../context/UsersContext'
import Button from '../Button/Button'

import styles from './Sidebar.module.scss'


const Sidebar = () => {

  const { getSortBy } = useContext(UsersContext) as IUsersContext

  return (
    <div className={styles.sidebar}>
      <div className={styles.body}>
        <p>Сортировка</p>
        <Button onClick={() => getSortBy('city')}>по городу</Button>
        <Button onClick={() => getSortBy('name')}> по компании</Button>
      </div>
    </div>
  )
}

export default Sidebar