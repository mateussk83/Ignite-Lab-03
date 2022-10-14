import { ReactNode } from 'react';
import { Slot } from '@radix-ui/react-slot'
import { clsx } from 'clsx'
//propriedades do Buttono
export interface ButtonProps {
 size?: 'sm' | 'md' | 'lg';
 children: ReactNode;// é qualquer coisa como um Buttono uma tag e etc...
 asChild?: boolean;
}

export function Button({size = 'md', children, asChild }:ButtonProps) {
 // slot serve para mudar a tag que vc esta usando por exemplo ali vc usa um button entretanto imagina que vc quisesse usar um h1 ai vc passaria o Slot como h1 ou um paragrafo
 const Comp = asChild ? Slot : 'button'
 return (
  // para aplicar variações com clsx basta colocar dentro da chave passar o parametro 
  // e depois dos : passar a condição
  <Comp className={clsx('py-4 px-3 bg-cyan-500 rounded font-semibold text-black text-sm w-full transition-colors hover:bg-cyan-300 focus:ring-2 ring-white')}
  >
   {children}
   </Comp>
 )
}