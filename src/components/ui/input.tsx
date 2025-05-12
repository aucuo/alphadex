import * as React from "react";
import { cn } from "@/lib/utils";
import './input.scss'

// Стили для компонента Input
const inputStyles = {
    base: "input", // Базовый класс для инпута
    focus: "input--focus", // Состояние фокуса
    disabled: "input--disabled", // Состояние disabled
    invalid: "input--invalid", // Состояние ошибки
};

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
    return (
        <>
            <div className={cn(
                    "input__wrapper",
                     className
                 )}
            >
                <input
                    type={type}
                    data-slot="input"
                    className={cn(
                        inputStyles.base,
                    )}
                    {...props}
                />
            </div>
        </>
    );
}

export {Input};