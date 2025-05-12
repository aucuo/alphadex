import * as React from "react"
import * as AccordionPrimitive from "@radix-ui/react-accordion"

import { cn } from "@/lib/utils"
import './accordion.scss'

import ArrowDownIcon from '@/assets/svg/arrow-down.svg'
import {ReactSVG} from "react-svg";

function Accordion({
                     ...props
                   }: React.ComponentProps<typeof AccordionPrimitive.Root>) {
  return <AccordionPrimitive.Root data-slot="accordion" {...props} />
}

function AccordionItem({
                         className,
                         ...props
                       }: React.ComponentProps<typeof AccordionPrimitive.Item>) {
  return (
      <AccordionPrimitive.Item
          data-slot="accordion-item"
          className={cn("accordion__item", className, { "accordion__item_last": props.value === "last" })}
          {...props}
      />
  )
}

function AccordionTrigger({
                              className,
                              children,
                              ...props
                          }: React.ComponentProps<typeof AccordionPrimitive.Trigger> & {
    "data-state"?: string; // Добавляем явное определение для data-state
}) {
    return (
        <AccordionPrimitive.Header className="accordion__header">
            <AccordionPrimitive.Trigger
                data-slot="accordion-trigger"
                className={cn(
                    "accordion__trigger",
                    className,
                    { "accordion__trigger_active": props["data-state"] === "open" }
                )}
                {...props}
            >
                {children}
                <ReactSVG src={ArrowDownIcon} className="accordion__icon reactsvg" />
            </AccordionPrimitive.Trigger>
        </AccordionPrimitive.Header>
    );
}

function AccordionContent({
                            className,
                            children,
                            ...props
                          }: React.ComponentProps<typeof AccordionPrimitive.Content>) {
  return (
      <AccordionPrimitive.Content
          data-slot="accordion-content"
          className={cn("accordion__content", className)}
          {...props}
      >
        <div className={cn("accordion__body", className)}>{children}</div>
      </AccordionPrimitive.Content>
  )
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }