import { CustomUser } from '../types'
import { FormEvent, useEffect, useState } from 'react'

export const useFormHelper = (user: CustomUser) => {
  const [formValues, setFormValues] = useState<CustomUser>(user)
  const [isActive, setIsActive] = useState<boolean>(true)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    alert(JSON.stringify(formValues))
  }

  useEffect(() => {
    if (user) {
      setFormValues({ ...user })
    }
  }, [user])

  return {
    formValues,
    setFormValues,
    isActive,
    setIsActive,
    handleSubmit
  }


}