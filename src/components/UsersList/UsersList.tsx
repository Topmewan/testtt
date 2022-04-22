import * as React from 'react'
import { FC, useContext } from 'react'
import styles from './UsersList.module.scss'
import UserCard from '../UserCard/UserCard'
import { UsersContext, IUsersContext } from '../../context/UsersContext'
import Page from '../Page/Page'

const UsersList: FC = () => {

  const { sortedUsers: users,getUser } = useContext(UsersContext) as IUsersContext

  return (
    <Page>
      <div className={styles.content}>
        <h1>Список пользователей</h1>
        <div className={styles.list}>
          {users.length > 0
            ? users.map((user) => {
              return (
                <UserCard
                  key={user.id}
                  user={user}
                  getUser={getUser}
                />
              )
            })
            : <h1>No data</h1>
          }
        </div>
        {users.length > 0 && <span className={styles.count}>Найдено {users.length} пользователей</span>}
      </div>
    </Page>
  )
}

export default UsersList