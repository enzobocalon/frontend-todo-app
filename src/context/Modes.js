import React, { createContext, useState } from 'react'

export const ModesContext = createContext()

const ModesProvider = ({children}) => {
    const [mode, setMode] = useState(true)

    const providerValue = {
        mode, setMode
    }

  return (
    <ModesContext.Provider value={providerValue}>
        {children}
    </ModesContext.Provider>
  )
}

export default ModesProvider