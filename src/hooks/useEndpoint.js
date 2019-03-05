// src/hooks/useEndPoint.js

import { useState, useEffect } from 'react'
import axios from 'axios'

export function useEndpoint (req) {
  const [res, setRes] = useState({
    data: null,
    complete: false,
    pending: false,
    error: false
  })
  useEffect(
    () => {
      setRes({
        data: null,
        pending: true,
        error: false,
        complete: false
      })
      axios(req)
        .then(res =>
          setRes({
            data: res.data,
            pending: false,
            error: false,
            complete: true
          })
        )
        .catch(() =>
          setRes({
            data: null,
            pending: false,
            error: true,
            complete: true
          })
        )
    },
    [req.url]
  )
  return res
}

export function useAsyncEndpoint (fn) {
  const [res, setRes] = useState({
    data: null,
    complete: false,
    pending: false,
    error: false
  })
  const [req, setReq] = useState()

  useEffect(
    () => {
      if (!req) return
      setRes({
        data: null,
        pending: true,
        error: false,
        complete: false
      })
      axios(req)
        .then(res =>
          setRes({
            data: res.data,
            pending: false,
            error: false,
            complete: true
          })
        )
        .catch(() =>
          setRes({
            data: null,
            pending: false,
            error: true,
            complete: true
          })
        )
    },
    [req]
  )

  return [res, (...args) => setReq(fn(...args))]
}
