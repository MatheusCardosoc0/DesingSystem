import clsx from 'clsx'
import { Slot } from '@radix-ui/react-slot';
import { ReactNode } from 'react';

export interface TextProps {
  size?: 'md' | 'lg' | 'xl'
  children: ReactNode
  asChild: boolean
}

export const Text = ({ size = 'md', children, asChild }: TextProps) => {

  const Comp = asChild ? Slot: 'span'


  return (
    <Comp className={clsx('text-gray-100',
      {
        'text-md': size == 'md',
        'text-lg': size == 'lg',
        'text-xl': size == 'xl'
      })
    }>
      {children}
    </Comp>
  )
}