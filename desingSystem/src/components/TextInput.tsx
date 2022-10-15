import clsx from 'clsx'
import { Slot } from '@radix-ui/react-slot';
import { InputHTMLAttributes, ReactNode } from 'react';

export interface TextInputRootProps {
  children: ReactNode
}

function TextInputRoot({ children }: TextInputRootProps) {
  return (
    <div className='py-4 px-3 rounded text-gray-100 text-sm  bg-gray-800 focus-within:ring-2 ring-cyan-300 w-full flex items-center gap-3'>
      {children}
    </div>
  )
}

export interface TextInputIconProps{
  children: ReactNode
}

function TextInputIcon(props: TextInputIconProps){
  return(
    <Slot className='w-6 h-6 text-gray-400'>
      {props.children}
    </Slot>
  )
}
TextInputIcon.displayName = 'TextInputIcon'

export interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> { }

const TextInputInput = (props: TextInputProps) => {


  return (
    <input className='bg-transparent flex-1 text-gray-100 text-sm  bg-gray-800 placeholder:text-gray-400 outline-none'
      {...props}
    />
  )
}

export const TextInput = {
  root: TextInputRoot,
  input: TextInputInput,
  icon: TextInputIcon
}