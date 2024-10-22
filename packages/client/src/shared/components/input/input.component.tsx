import React, { FC } from 'react'

import { Field } from 'react-final-form'
import { Input as InputStyled } from './input.styles'

interface InputProps {
  name: string
  labelText?: string
  placeholder: string
  type?: string
}

export const Input: FC<InputProps> = ({ name, labelText, placeholder = '', type = 'text' }): JSX.Element => {
  return (
    <Field
      name={name}
      render={({ input }) => (
        <div>
          {labelText && <label>{labelText}</label>}
          <InputStyled placeholder={placeholder} {...input} type={type} />
        </div>
      )}
    />
  )
}
