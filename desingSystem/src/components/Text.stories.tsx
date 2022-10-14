import {Meta, StoryObj} from '@storybook/react'
import { Text, TextProps } from "./Text";

export default {
  title: 'components/Text',
  component: Text,
  args: {
    children: 'Matheus'
  }
} as Meta<TextProps>

export const Default: StoryObj = {}

export const Small : StoryObj = {
  args: {
    size: 'xl'
  }
}