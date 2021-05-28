import axios from "axios";
import React, { createContext, ReactNode, useEffect, useState } from "react";
import api from "../services/api";

export interface ProductProps {
    id: number;
    productName: string;
    productValue: string;
    categorie: string;
    photo?: string;
    widthValue?: number;
    heightValue?: number;
    
}

interface ProductsContextProps {
    productsCard: ProductProps [];
    productsFilteredCategorie: ProductProps [];
    handleSetProductsCard: (value: ProductProps[]) => void;
    handleSetProductsFilteredCategorie: (value: ProductProps[]) => void;
    getProductsFilteredCategorie: (titleMenu: string) => void;
}

export const ProductsContext = createContext({} as ProductsContextProps)

interface ProductsProviderProps {
    children: ReactNode;
}

export function ProductsProvider({children}: ProductsProviderProps){
    const [productsCard, setProductsCard] = useState<ProductProps []>([])
    const [productsFilteredCategorie, setProductsFilteredCategorie] = useState<ProductProps []>([])

    function getProducts() {
        api('/products')
            .then(response => setProductsCard(response.data))
            .catch(e => console.log(e))
    }

    function getProductsFilteredCategorie(titleMenu: string) {
        setProductsFilteredCategorie(productsCard.filter(product => product.categorie === titleMenu.toLowerCase()))
        console.log('filtrou')
    }

    function handleSetProductsCard(value: ProductProps[]){
        setProductsCard(value)
    }

    function handleSetProductsFilteredCategorie(value: ProductProps[]){
        setProductsFilteredCategorie(value)
    }

    useEffect(() => {
        getProducts()
    }, [])

    useEffect(() => {
        getProductsFilteredCategorie('coats')
    }, [productsCard])


    return (
        <ProductsContext.Provider
            value={{
                productsCard,
                productsFilteredCategorie,
                handleSetProductsCard,
                handleSetProductsFilteredCategorie,
                getProductsFilteredCategorie
            }}
        >
            {children}
        </ProductsContext.Provider>
    )
}