'use client';

import { Button } from 'flowbite-react';
import {IoMdAdd} from 'react-icons/io'

export function ButtonWithIcon({children, className, onClick}) {
  return (
    <>
     
      <Button onClick={onClick} className={className}
      gradientMonochrome="teal"
      >
          {children}
        <IoMdAdd className="ml-2 h-5 w-5" />
      </Button>
    </>
  )
}


