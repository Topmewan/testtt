import * as React from 'react'
import styles from './App.module.scss'
import Sidebar from '../../components/Sidebar/Sidebar'
import UsersList from '../../components/UsersList/UsersList'
import { useContext } from 'react'
import { IUsersContext, UsersContext } from '../../context/UsersContext'
import UserForm from '../UserForm/UserForm'

const App = () => {

  const { currentUser } = useContext(UsersContext) as IUsersContext

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.row}>
          <Sidebar />
          {currentUser
            ? <UserForm currentUser={currentUser} />
            : <UsersList />
          }
        </div>
      </div>
    </div>
  )
}

export default App