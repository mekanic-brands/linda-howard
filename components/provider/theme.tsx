"use client"
import { createContext, useContext } from 'react';

import { SettingsPayload } from '@/types';

export const ThemeContext = createContext<{data:SettingsPayload}>({data: {}});

const ThemeProvider = ({children, value}) => {
  
  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider >
  )
}

export default ThemeProvider
