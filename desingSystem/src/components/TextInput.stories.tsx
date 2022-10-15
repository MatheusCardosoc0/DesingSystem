import { Meta, StoryObj } from '@storybook/react'
import { Envelope } from 'phosphor-react';
import { TextInput, TextInputRootProps } from './TextInput';

export default {
  title: 'components/TextInput',
  component: TextInput.root,
  args: {
    children: [ 
        <TextInput.icon>
          <Envelope />
        </TextInput.icon>,
        <TextInput.input placeholder='eae' />      
    ],
  },
  argTypes: {}
} as Meta<TextInputRootProps>

export const Default: StoryObj<TextInputRootProps> = {}