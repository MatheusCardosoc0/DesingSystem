import clsx from 'clsx'
import { Slot } from '@radix-ui/react-slot';
import { ReactNode } from 'react';

export interface TextProps {
  size?: 'lg' | 'xl' | '2xl'
  children: ReactNode
  asChild: boolean
}

export const Header = ({ size = 'lg', children, asChild }: TextProps) => {

  const Comp = asChild ? Slot: 'h2'


  return (
    <Comp className={clsx('text-gray-100 font-bold',
      {
        'text-lg': size == 'lg',
        'text-xl': size == 'xl',
        'text-2xl': size == '2xl'
      })
    }>
      {children}
    </Comp>
  )
}