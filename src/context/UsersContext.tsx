import * as React from 'react'
import { createContext, FC, ReactNode, useEffect, useState } from 'react'
import { CustomUser } from '../types'
import axios from 'axios'
import { useSort } from '../hooks/useSort'


interface Props {
  children?: ReactNode
}

export interface IUsersContext {
  data: CustomUser[],
  getUser: (user: CustomUser) => void,
  getSortBy: (sort: string) => void,
  isLoading: boolean,
  currentUser: CustomUser | null,
  sortValue: string,
  sortedUsers: CustomUser[]
}

export const UsersContext = createContext<IUsersContext | null>(null)

const UsersProvider: FC<Props> = ({ children }) => {

  const [data, setData] = useState<CustomUser[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [currentUser, setCurrentUser] = useState<CustomUser | null>(null)
  const [sortValue, setSortValue] = useState<string>('')
  const sortedUsers = useSort(data, sortValue)


  const loadData = async (url: string) => {
    setIsLoading(true)
    try {
      const { data } = await axios.get<CustomUser[]>(url)
      setData(data)
    } catch (e) {
      console.log(e)

    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    loadData('https://jsonplaceholder.typicode.com/users')
  }, [])

  const getUser = (user: CustomUser) => {
    setCurrentUser(user)
  }

  const getSortBy = (sort: string) => {
    setSortValue(sort)
  }

  const values = {
    data,
    isLoading,
    getUser,
    currentUser,
    getSortBy,
    sortValue,
    sortedUsers
  }

  return (
    <UsersContext.Provider value={values}>
      {children}
    </UsersContext.Provider>
  )
}

export default UsersProvider