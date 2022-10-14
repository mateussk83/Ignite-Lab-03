import { Meta, StoryObj} from '@storybook/react' 
import { Button, ButtonProps } from './Button'
//documentação do component
export default {
 title: 'Components/Button',
 component: Button,
 args: {
  children: 'Create account',
 }       // intelicense 
} as Meta<ButtonProps>

//variações
export const Default: StoryObj<ButtonProps> = {
}