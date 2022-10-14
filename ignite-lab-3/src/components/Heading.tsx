import { ReactNode } from 'react';
import { Slot } from '@radix-ui/react-slot'
import { clsx } from 'clsx'

//propriedades do Heading
export interface HeadingProps {
 size?: 'sm' | 'md' | 'lg';
 children: ReactNode;// é qualquer coisa como um Headingo uma tag e etc...
 asChild?: boolean;
}

export function Heading({size = 'md', children, asChild }:HeadingProps) {
 // slot serve para mudar a tag que vc esta usando por exemplo ali vc usa um span entretanto imagina que vc quisesse usar um h1 ai vc passaria o Slot como h1 ou um paragrafo
 const Comp = asChild ? Slot : 'h2'
 return (
  // para aplicar variações com clsx basta colocar dentro da chave passar o parametro 
  // e depois dos : passar a condição
  <Comp className={clsx('text-gray-100 font-sans font-bold', 
  {
   'text-lg' : size == 'sm',
   'text-xl' : size == 'md',
   'text-2xl' : size == 'lg',
  })}
  >
   {children}
   </Comp>
 )
}