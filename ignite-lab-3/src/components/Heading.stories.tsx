import { Meta, StoryObj} from '@storybook/react' 
import { Heading, HeadingProps } from './Heading'
//documentação do component
export default {
 title: 'Components/Heading',
 component: Heading,
 args: {
  children: 'Lorem ipsum.',
 }       // intelicense 
} as Meta<HeadingProps>

//variações
export const Default: StoryObj<HeadingProps> = {
 args: {
  size: 'md'
 }
}
export const Small: StoryObj<HeadingProps> = {
 args:{
  size: 'sm'

 }
}
export const Large: StoryObj<HeadingProps> = {
 args:{
  size: 'lg'
 }
}

export const CustomComponent: StoryObj<HeadingProps> = {
 args:{
  asChild: true,
  children: (
   <h1>heading with h1 tag</h1>
  ) 
 }
}