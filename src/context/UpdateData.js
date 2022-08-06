import React, { createContext, useState } from 'react'

export const UpdateDataContext = createContext()

const UpdateDataProvider = ({children}) => {
    const [update, setUpdate] = useState(0)

    const providerValue = {
      update, setUpdate
    }

  return (
    <UpdateDataContext.Provider value={providerValue}>
        {children}
    </UpdateDataContext.Provider>
  )
}

export default UpdateDataProvider