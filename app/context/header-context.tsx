'use client'

import React, { createContext, useContext, ReactNode } from 'react';

interface HeaderContextType {
  headerName: string;
  setHeaderName: (name: string) => void;
}

const HeaderContext = createContext<HeaderContextType | undefined>(undefined);

export function HeaderProvider({ children }: { children: ReactNode }) {
  const [headerName, setHeaderName] = React.useState('');

  return (
    <HeaderContext.Provider value={{ headerName, setHeaderName }}>
      {children}
    </HeaderContext.Provider>
  );
}

export function useHeader() {
  const context = useContext(HeaderContext);
  if (context === undefined) {
    throw new Error('useHeader must be used within a HeaderProvider');
  }
  return context;
}
