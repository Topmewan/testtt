import * as React from 'react'
import Page from '../Page/Page'
import Button from '../Button/Button'
import { ChangeEvent, FC, FormEvent, useEffect, useState } from 'react'
import { Address, CustomUser } from '../../types'

import styles from './UserForm.module.scss'
import Input from '../Input/Input'

interface formProps {
  currentUser: CustomUser
}


const UserForm: FC<formProps> = ({ currentUser }) => {

  const [formValues, setFormValues] = useState<CustomUser>(currentUser)
  const { name, username, email, address, phone, website, comment } = formValues
  const [isActive, setIsActive] = useState<boolean>(true)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    alert(JSON.stringify(formValues))
  }

  useEffect(() => {
    if (currentUser) {
      setFormValues({ ...currentUser })
    }
  }, [currentUser])

  return (
    <Page>
      <div className={styles.content}>
        <div className={styles.top}>
          <h1>Профиль пользователя</h1>
          <Button onClick={() => setIsActive(false)}>Редактировать</Button>
        </div>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.inputs}>

            <Input
              label='Name'
              placeholder='Name'
              value={name}
              isActive={isActive}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setFormValues({ ...formValues, name: e.target.value })
              }}
            />

            <Input
              label='User name'
              value={username}
              placeholder='User name'
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setFormValues({ ...formValues, username: e.target.value })
              }}
              isActive={isActive}
            />
            <Input
              label='E-mail'
              value={email}
              placeholder='E-mail'
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setFormValues({ ...formValues, email: e.target.value })
              }}
              isActive={isActive}
            />

            <Input
              label='Street'
              value={address.street}
              placeholder='Street'
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                // @ts-ignore
                setFormValues({ ...formValues, address: { street: e.target.value } })
              }}
              isActive={isActive}
            />
            <Input
              label='City'
              value={address.city}
              placeholder='City'
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                // @ts-ignore
                setFormValues({ ...formValues, address: { city: e.target.value } })
              }}
              isActive={isActive}
            />
            <Input
              label='Zip code'
              value={address.zipcode}
              placeholder='Zip code'
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                // @ts-ignore
                setFormValues({ ...formValues, address: { zipcode: e.target.value } })
              }}
              isActive={isActive}
            />
            <Input
              label='Phone'
              value={phone}
              placeholder='Phone'
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setFormValues({ ...formValues, phone: e.target.value })
              }}
              isActive={isActive}
            />
            <Input
              label='Website'
              value={website}
              placeholder='Website'
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setFormValues({ ...formValues, website: e.target.value })
              }}
              isActive={isActive}
            />
          </div>
          <div className={styles.textarea}>
            <Input
              label='Comment'
              value={comment}
              variant='textarea'
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setFormValues({ ...formValues, comment: e.target.value })
              }}
              isActive={isActive}
            />
          </div>
          <div className={styles.button}>
            <Button
              variant='secondary'
              type='submit'
              disabled={isActive}
            >
              Отправить
            </Button>
          </div>
        </form>
      </div>
    </Page>
  )
}

export default UserForm