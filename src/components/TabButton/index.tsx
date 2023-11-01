import React from 'react';

const TabButton = ({ active, selectTab, children }: any) => {
    const buttonClasses = active ? 'text-white border-b-2 border-[#8D6D3A] text-[#a58148]'
        : 'text-[#a58148]'

    return (
        <button onClick={selectTab}>
            <p className={`mr-3 text-white font-extralight ${buttonClasses}`}>
                {children}
            </p>
        </button>

    )
}

export default TabButton;