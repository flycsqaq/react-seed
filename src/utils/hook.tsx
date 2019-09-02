import React, { useCallback, useState, Dispatch } from 'react'


export const useClientRect = () => {
    const [rect, setRect]: [DOMRect, Dispatch<DOMRect>] = useState({} as DOMRect)
    const ref = useCallback(node => {
        if (node !== null) {
            setRect(node.getBoundingClientRect())
        }
    }, [])
    return [rect, ref]
}
