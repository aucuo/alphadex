import React from 'react';

// Тип пропсов
type SectionTitleProps = {
    children?: React.ReactNode;
    className?: string;
    id?: string;
};

const SectionTitle: React.FC<SectionTitleProps> = ({ children, className = '', id='' }) => {
    return (
        <h2 className={`section__title ${className}`} id={id}>
            {children}
            <div className="section__title-background background"></div>
        </h2>
    );
};

export default SectionTitle;