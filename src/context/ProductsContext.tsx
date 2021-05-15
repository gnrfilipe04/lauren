import { createContext, ReactNode } from "react";


export const ProductsContext = createContext({})

interface ProductsProviderProps {
    children: ReactNode;
}

export function ProductsProvider({children}: ProductsProviderProps){


    return (
        <ProductsContext.Provider
            value={{}}
        >
            {children}
        </ProductsContext.Provider>
    )
}