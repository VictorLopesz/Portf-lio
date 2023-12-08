import React from 'react';

const TabButton = ({ active, selectTab, children }: any) => {
    const buttonClasses = active ? 'text-white border-b-2 border-[#457191]'
        : ''

    return (
        <button onClick={selectTab}>
            <p className={`mr-3 text-white font-extralight ${buttonClasses}`}>
                {children}
            </p>
        </button>

    )
}

export default TabButton;