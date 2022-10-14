import { ReactNode } from 'react';
import { Slot } from '@radix-ui/react-slot'
import { clsx } from 'clsx'
//propriedades do texto
export interface TextProps {
 size?: 'sm' | 'md' | 'lg';
 children: ReactNode;// é qualquer coisa como um texto uma tag e etc...
 asChild?: boolean;
}

export function Text({size = 'md', children, asChild }:TextProps) {
 // slot serve para mudar a tag que vc esta usando por exemplo ali vc usa um span entretanto imagina que vc quisesse usar um h1 ai vc passaria o Slot como h1 ou um paragrafo
 const Comp = asChild ? Slot : 'span'
 return (
  // para aplicar variações com clsx basta colocar dentro da chave passar o parametro 
  // e depois dos : passar a condição
  <Comp className={clsx('text-gray-100 font-sans', 
  {
   'text-xs' : size == 'sm',
   'text-sm' : size == 'md',
   'text-md' : size == 'lg',
  })}
  >
   {children}
   </Comp>
 )
}