import React from 'react'

export const Button = ({children}) => {
  return (
  <button className="w-64 text-slate-200 text-xl bg-gradient-to-r from-blue-400 via-blue-500 rounded-lg hover:bg-gradient-to-t to-blue-800 px-5 py-3 mr-2 font-medium">
  {children}
</button>
  )
}
