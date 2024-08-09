import React, { ReactNode } from 'react'
import { Form as FromComponent } from 'react-final-form'

interface FormProps<T> {
  children: ReactNode
  handleSubmitForm: (data: T) => void
}

export const Form = <T,>({ children, handleSubmitForm }: FormProps<T>): JSX.Element => {
  return (
    <div>
      <FromComponent
        onSubmit={handleSubmitForm}
        render={({ handleSubmit }) => <form onSubmit={handleSubmit}>{children}</form>}
      />
    </div>
  )
}
