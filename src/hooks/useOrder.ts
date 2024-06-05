import { useState } from "react"
import { OrderItem } from "../types"

const useOrder = () => {
    const [order, setOrder] = useState<OrderItem[]>([])
    
    const addItem = () => {
        console.log('AddItem');
        
    }

    return {
        addItem
    }
}

export default useOrder