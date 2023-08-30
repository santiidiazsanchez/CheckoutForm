import React from 'react';

// Componente base para tipografía con opción para activar/desactivar "col" y "text-center"
function BaseTypography({ colActive, centerText, children }) {
    const colClass = colActive ? 'col-12 col-lg-6 m-auto' : '';
    const textCenterClass = centerText ? 'text-center' : '';
    const combinedClass = `${colClass} ${textCenterClass}`;

    return <div className={combinedClass}>{children}</div>;
}

// Componente para encabezados h1, h2, h3, h4, h5
function TypographyHeading({ level, colActive, centerText, children, margin }) {
    const HeadingComponent = `h${level}`;
    return (
        <BaseTypography colActive={colActive} centerText={centerText}>
            <HeadingComponent
                className={'my-' + margin + ' fs-' + level}>
                {children}
            </HeadingComponent>
        </BaseTypography>
    );
}

// Componente para estilos de tipografía display-1, display-2, display-3, display-4, display-5
function TypographyDisplay({ level, colActive, centerText, children, margin }) {
    const DisplayComponent = `h${level}`;
    return (
        <BaseTypography colActive={colActive} centerText={centerText}>
            <DisplayComponent
                className={'my-' + margin + ' fw-bold display-' + level}>
                {children}
            </DisplayComponent>
        </BaseTypography>
    );
}

// Componente para texto normal
function TypographyText({ weight, colActive, centerText, children, margin }) {
    return (
        <BaseTypography colActive={colActive} centerText={centerText}>
            <p className={'my-' + margin + ' fw-' + weight}>{children}</p>
        </BaseTypography>
    );
}

// Componente para texto en cursiva
function TypographyItalicText({ weight, colActive, centerText, children, margin }) {
    return (
        <BaseTypography colActive={colActive} centerText={centerText}>
            <p className={'my-' + margin + ' fw-' + weight}>
                <em>
                    {children}
                </em>
            </p>
        </BaseTypography>
    );
}

// Componente para texto small
function TypographySmallText({ weight, colActive, centerText, children, margin }) {
    return (
        <BaseTypography colActive={colActive} centerText={centerText}>
            <p className={'my-' + margin + ' fw-' + weight}>
                <small>
                    {children}
                </small>
            </p>
        </BaseTypography>
    );
}

// Componente para iconos de Bootstrap
function BootstrapIcon({ name, size }) {
    return <i className={'bi bi-' + name + ' fs-' + size} />;
}

export {
    TypographyHeading,
    TypographyDisplay,
    TypographyText,
    TypographyItalicText,
    TypographySmallText,
    BootstrapIcon
};