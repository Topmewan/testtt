import * as React from 'react'
import { FC } from 'react'

import Input from '../../components/Input/Input'
import Textarea from '../../components/Input/Textarea'
import Page from '../../components/Page/Page'
import Button from '../../components/Button/Button'
import { useFormHelper } from '../../hooks/useFormHelper'

import { CustomUser } from '../../types'

import styles from './UserForm.module.scss'


interface formProps {
  currentUser: CustomUser
}


const UserForm: FC<formProps> = ({ currentUser }) => {

  const { formValues, setFormValues, isActive, handleSubmit, setIsActive } = useFormHelper(currentUser)
  const { name, username, email, address, phone, website, comment } = formValues

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
              required={true}
              value={name}
              isActive={isActive}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setFormValues({ ...formValues, name: e.target.value })
              }}
            />

            <Input
              required={true}

              label='User name'
              value={username}
              placeholder='User name'
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setFormValues({ ...formValues, username: e.target.value })
              }}
              isActive={isActive}
            />
            <Input
              required={true}

              label='E-mail'
              value={email}
              placeholder='E-mail'
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setFormValues({ ...formValues, email: e.target.value })
              }}
              isActive={isActive}
            />

            <Input
              required={true}

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
              required={true}

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
              required={true}

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
              required={true}

              label='Phone'
              value={phone}
              placeholder='Phone'
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setFormValues({ ...formValues, phone: e.target.value })
              }}
              isActive={isActive}
            />
            <Input
              required={true}

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
            <Textarea
              label='Comment'
              value={comment}
              onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
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