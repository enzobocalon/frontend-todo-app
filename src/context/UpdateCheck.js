import React, { createContext, useState } from 'react'

export const UpdateCheckContext = createContext()

const UpdateCheckProvider = ({children}) => {
    const [updateCheck, setUpdateCheck] = useState(0)

    const providerValue = {
      updateCheck, setUpdateCheck
    }

  return (
    <UpdateCheckContext.Provider value={providerValue}>
        {children}
    </UpdateCheckContext.Provider>
  )
}

export default UpdateCheckProvider