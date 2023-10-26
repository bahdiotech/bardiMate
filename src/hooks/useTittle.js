import { useEffect } from "react";


export const useTittle = (title) => {
    useEffect(() => {
        document.title = `${title}/BardiMate`
    })

  return null
}
