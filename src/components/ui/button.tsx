import * as React from "react"
import {Slot} from "@radix-ui/react-slot"
import {cva, type VariantProps} from "class-variance-authority"
import {cn} from "@/lib/utils.ts";

import './button.scss'

const buttonVariants = cva(
    "btn",
    {
        variants: {
            variant: {
                default:
                    "btn--primary",
                outline:
                    "btn--outline",
                outlinePrimary:
                    "btn--outline-primary",
                black:
                    "btn--black"
            },
            size: {
                default: "",
                sm: "btn--small",
                lg: "btn-lg",
                icon: "btn--icon",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    }
)

function Button({
                    className,
                    variant,
                    size,
                    asChild = false,
                    ...props
                }: React.ComponentProps<"button"> &
    VariantProps<typeof buttonVariants> & {
    asChild?: boolean
}) {
    const Comp = asChild ? Slot : "button"

    return (
        <Comp
            data-slot="button"
            className={cn(buttonVariants({variant, size, className}))}
            {...props}
        />
    )
}

export {Button, buttonVariants}
