import React from 'react';

const TabButton = ({ active, selectTab, children }: any) => {
    const ButtonClasses = active ? 'text-white border-b border-[#8D6D3A]' : 'text-[#a58148]'

    return (
        <button onClick={selectTab}>
            <p className={`mr-3 text-white hover:text-white ${ButtonClasses}`}>
                {children}
            </p>
        </button>

    )
}

export default TabButton;