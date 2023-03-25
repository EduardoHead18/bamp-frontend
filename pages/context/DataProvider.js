import React from "react"
const DataContext = React.createContext({})
export const DataProviderApp = ({children})=>{
    <DataContext.Provider value={{nombre:'eduardo',age:'21'}}>
        {children}
    </DataContext.Provider>

}
export default DataProviderApp