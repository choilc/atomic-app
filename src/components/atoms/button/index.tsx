import React from "react"

type Props = {
    children: React.ReactNode
} & React.ComponentPropsWithoutRef<'button'>

export const Button = ({children, ...props}: Props) => {
    return <button {...props}>{children}</button>
}