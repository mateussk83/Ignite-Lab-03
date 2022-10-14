import { Meta, StoryObj} from '@storybook/react'
import { TextInput, TextInputProps } from './TextInput'
//documentação do component
export default {
 title: 'Components/TextInput',
 component: TextInput,
 args: {
  placeholder: 'type your e-mail address'
 }       // intelicense 
} as Meta<TextInputProps>

//variações
export const Default: StoryObj<TextInputProps> = {
}