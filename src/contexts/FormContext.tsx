import { createContext, useState, ReactNode } from 'react'

interface FormContextProviderProps {
  children: ReactNode
}

interface FormContextData {
  modal: boolean;
  setModal: (modal: boolean) => void;
  modalNum: number;
  setModalNum: (modalNum: number) => void;
}

export const FormContext = createContext<FormContextData>({} as FormContextData);

export function FormContextProvider({ children }: FormContextProviderProps) {
  const [modal, setModal] = useState(false)
  const [modalNum, setModalNum] = useState(1)

  return (
    <FormContext.Provider value={{ 
        modal, setModal, modalNum, setModalNum}}>
        {children}
    </FormContext.Provider>
  )
}