import React from 'react'
import { RaceBy } from '@uiball/loaders'
import { document } from 'postcss'

export const Loading = () => {
  return (
    <div className="min-h-[600px] w-full flex justify-start other:justify-evenly flex-wrap" >
        <div>
            {
                document.documentElement.classList.current('dark') && <RaceBy 
                size={100}
                color='white'
                />
                
            }

            {document.documentElement.classList('light') && <RaceBy 
                size={100}
                color='black'
                />}
           
        </div>

    </div>
  )
}
