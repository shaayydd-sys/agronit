import React from 'react';

// Using the provided global agronit-logo.svg for all variants as requested
const LogoBase = ({ className = '' }) => {
    return (
        <img
            src="/agronit-logo.svg"
            alt="AGRONIT TRADING FZCO"
            className={className}
            loading="lazy"
        />
    );
};

export const LogoFull = ({ className }) => <LogoBase className={className} />;
export const LogoCompact = ({ className }) => <LogoBase className={className} />;
export const LogoDark = ({ className }) => <LogoBase className={className} />;

