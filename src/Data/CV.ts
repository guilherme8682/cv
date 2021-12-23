import { CSSProperties } from "react"

export interface CV {
    card: Card[]
}
export interface Card {
    mainSide?: boolean
    title?: Information
    link?: string
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
        path: string
        size?: number
    }
    image?: {
        path: string
        size?: number
    }
    link?: string
    bar?: {
        name: string
        size: number
        description?: string
    }[]
}