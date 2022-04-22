import * as React from 'react'
import styles from './UserCard.module.scss'
import Button from '../Button/Button'
import { CustomUser} from '../../types'
import { FC } from 'react'

interface cardProps {
  user: CustomUser,
  getUser: (user: CustomUser) => void
}

const UserCard: FC<cardProps> = ({ user, getUser }) => {
  const {
    name: userName,
    address: { city },
    company: { name: companyName }
  } = user
  return (
    <div className={styles.card}>
      <div className={styles.info}>
        <span>{userName}</span>
        <span>{city}</span>
        <span>{companyName}</span>
      </div>
      <div className={styles.button}>
        <Button
          variant='primary'
          onClick={() => getUser(user)}
        >
          Подробнее
        </Button>
      </div>
    </div>
  )
}

export default UserCard