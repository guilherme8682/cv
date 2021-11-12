import { CSSProperties } from "react"

export interface CV {
    card: Card[]
}
export interface Card {
    title?: Information
    arrow?: {
        position: number
        style?: CSSProperties
    }
    component: Information[][]
    subComponent?: Information[][]
    style?: CSSProperties
}
export interface Information {
    value: string
    style?: CSSProperties
    icon?: {
        size?: number,
        path: string
    }
    link?: string
    bar?: {
        name: string, 
        size: number
    }[]
}