import clsx from 'clsx'
import { Slot } from '@radix-ui/react-slot';
import { ReactNode } from 'react';

export interface ButtonProps {
  children: ReactNode
  asChild: boolean
}

export const Button = ({ children, asChild }: ButtonProps) => {

  const Comp = asChild ? Slot: 'button'


  return (
    <Comp className={clsx('py-4 text-black bg-cyan-500 px-3 rounded font-semibold text-sm w-full hover:bg-cyan-300 transition-colors focus:ring-2 ring-white')
    }>
      {children}
    </Comp>
  )
}