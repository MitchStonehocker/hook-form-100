// /src/hooks/useFetch.js

import React, { useState, useEffect } from 'react'
import axios from 'axios'

export const useFetch = url => {
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [data, setData] = useState([])

  useEffect(
    () => {
      setIsLoading(true)

      axios.get(url).then(result => setData(result.data))

      setIsLoading(false)
    },
    [url]
  )
}

// const useEffect(
//   () => async () => {
//     setLoading(true)
//     try {
//       const response = await fetch(url)
//       if (response.ok) {
//         const data = await response.json()
//         setData(data)
//       } else {
//         setError(new Error(response.statusText))
//       }
//     } catch (e) {
//       setError(e)
//     }
//     setLoading(false)
//   }, [url]
// )

// return { error, loading, data }

// const FetchControl = () => {
//   const { error, loading, data } = useFetch('http://...')
//   if (error) return <Err error={error} />
//   if (loading) return <Loading />
//   return <DataView data={data} />
// }
