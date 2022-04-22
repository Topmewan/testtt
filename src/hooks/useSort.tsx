import { CustomUser } from '../types'

export const useSort = (data: CustomUser[], sortBy: string): CustomUser[] => {
  if (!sortBy) {
    return data
  }
  return [...data].sort((a, b): any => {
    if (sortBy === 'city') {
      return a.address.city.localeCompare(b.address.city)
    }
    if (sortBy === 'name') {
      return a.company.name.localeCompare(b.company.name)
    }
  })
}

