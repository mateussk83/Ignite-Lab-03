import { ReactNode } from 'react';
import { clsx } from 'clsx'
//propriedades do Texto
export interface TextInputProps {
 placeholder?: string;
}

interface TextInputRootProps {
 children 
}

function TextInputRoot {
return (
 <div className='py-4 px-3 rounded outline-none w-full bg-gray-800 text-gray-100 text-xs placeholder:text-gray-400 focus:ring-2 ring-cyan-300'>

 </div>
)
}
// function TextInputIcon {}

function TextInput({ placeholder }:TextInputProps) {
 return (
  <div className='py-4 px-3 rounded outline-none w-full bg-gray-800 text-gray-100 text-xs placeholder:text-gray-400 focus:ring-2 ring-cyan-300'>

  {/* // para aplicar variações com clsx basta colocar dentro da chave passar o parametro 
  // e depois dos : passar a condição */}
  <input className={clsx('')}
  placeholder={placeholder}
  />
  </div>
  
 )
}