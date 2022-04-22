// import * as React from 'react'
// import { useEffect, useState } from 'react'
// import { Root } from '../types'
// import axios from 'axios'
//
// const UseFetch = (url: string) => {
//   const [data, setData] = useState<Root[]>([])
//   const [isLoading, setIsLoading] = useState<boolean>(false)
//
//   const loadData = async (url: string) => {
//     setIsLoading(true)
//     try {
//       const res = await axios.get<Root[]>(url)
//       setData(res.data)
//     } catch (e) {
//       console.log(e)
//
//     } finally {
//       setIsLoading(false)
//     }
//   }
//
//   useEffect(() => {
//     loadData(url)
//   }, [])
//
//
//   return {
//     data,
//     setData,
//     isLoading
//   }
// }
//
// export default UseFetch