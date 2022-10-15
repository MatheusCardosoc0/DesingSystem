import {Meta, StoryObj} from '@storybook/react'
import { Header } from './Header';
import { TextProps } from "./Text";

export default {
  title: 'components/Header',
  component: Header,
  args: {
    children: 'Matheus',
    size: 'md'
  },
  argTypes: {
    size: {
      options: ['md', 'lg', 'xl'],
      control: {
        type: 'inline-radio'
      }
    }
  }
} as Meta<TextProps>

export const Default: StoryObj = {}

export const Small : StoryObj<TextProps> = {
  args: {
    size: 'md'
  }
}
export const Medium : StoryObj<TextProps> = {
  args: {
    size: 'xl'
  }
}
export const Large : StoryObj<TextProps> = {
  args: {
    asChild: true,
    children: (
      <h2>teste</h2>
    )
  },
  argTypes:{
    children: {
      table: {
        disable: true
      }
    },
    asChild: {
      table: {
        disable: true
      }
    }
  }
}