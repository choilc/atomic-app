import React from 'react'
import type { Meta, StoryObj } from '@storybook/react';
import { Input, Props } from '.'

export default {
  title: 'atoms/Input',
  component: Input,
} as Meta<typeof Input>

export const Controlled: StoryObj<typeof Input> = (args: Props) => {
  const [value, setValue] = React.useState(args.value ?? '')  

  return (
    <Input
      {...args}
      onChange={setValue}
      value={value}
    />
  )
}
Controlled.args = {
    value: 'hihi'
}