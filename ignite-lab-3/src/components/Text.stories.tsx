import { Meta, StoryObj} from '@storybook/react' 
import { Text, TextProps } from './text'
//documentação do component
export default {
 title: 'Components/Text',
 component: Text,
 args: {
  children: 'Lorem ipsum.',
 }       // intelicense 
} as Meta<TextProps>

//variações
export const Default: StoryObj<TextProps> = {
 args: {
  size: 'md'
 }
}
export const Small: StoryObj<TextProps> = {
 args:{
  size: 'sm'

 }
}
export const Large: StoryObj<TextProps> = {
 args:{
  size: 'lg'
 }
}

export const CustomComponent: StoryObj<TextProps> = {
 args:{
  asChild: true,
  children: (
   <p>children</p>
  ) 
 }
}