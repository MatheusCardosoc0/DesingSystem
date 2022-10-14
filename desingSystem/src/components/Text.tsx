import clsx from 'clsx'
import React from 'react'

export interface TextProps {
  size?: 'md' | 'lg' | 'xl'
  children: string
}

export const Text = ({ size = 'md', children }: TextProps) => {
  return (
    <div className={clsx('text-gray-100',
      {
        'text-md': size == 'md',
        'text-lg': size == 'lg',
        'text-xl': size == 'xl'
      })
    }>
      {children}
    </div>
  )
}