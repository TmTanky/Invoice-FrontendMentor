import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Button } from '../../components/Button'

export default {
  title: 'Button',
  component: Button
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => {
  const { children } = args
  return <Button {...args}> {children} </Button>
}

export const Paid = Template.bind({})
Paid.args = {
  status: 'paid',
  children: 'Paid'
}

export const Pending = Template.bind({})
Pending.args = {
  status: 'pending',
  children: 'Pending'
}

export const Draft = Template.bind({})
Draft.args = {
  status: 'draft',
  children: 'Draft'
}
