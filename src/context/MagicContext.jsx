import React, { createContext, useState, useContext } from 'react';

const MagicContext = createContext();

export const MagicProvider = ({ children }) => {
    const [showAvatar, setShowAvatar] = useState(false);

    const toggleAvatar = () => {
        setShowAvatar(prev => !prev);
    };

    return (
        <MagicContext.Provider value={{ showAvatar, toggleAvatar }}>
            {children}
        </MagicContext.Provider>
    );
};

export const useMagic = () => useContext(MagicContext);
