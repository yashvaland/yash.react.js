import { createContext, useState } from "react";

export const themecontext = createContext()

export function ThemeContextProviderFunction({ children }) {
    const [theme, settheme] = useState("light")

    // themeupdaterfunction
    const themeupdaterfunction=()=>{
        settheme(theme=="light"?"dark":"light")
    }
    return (
        <themecontext.Provider value={{theme,themeupdaterfunction}}>{children}</themecontext.Provider>
    )
}