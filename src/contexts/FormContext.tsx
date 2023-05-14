import { createContext, useState, ReactNode } from 'react'

interface FormContextProviderProps {
  children: ReactNode
}

interface FormContextData {
  modal: boolean;
  setModal: (modal: boolean) => void;
}

export const FormContext = createContext<FormContextData>({} as FormContextData);

export function FormContextProvider({ children }: FormContextProviderProps) {
  const [modal, setModal] = useState(false)

  return (
    <FormContext.Provider value={{ 
        modal, setModal}}>
        {children}
    </FormContext.Provider>
  )
}