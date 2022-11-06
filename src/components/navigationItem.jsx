import React, { useEffect } from 'react'

function NavigationItem({ item ,onTap,selected}) {
    console.log(selected);
useEffect(() => {

}, [selected])


    return (
        <div className={`mt-5 w-full h-5 ${selected? "bg-lime-400":"bg-none"} flex  gap-5 py-6 px-3 items-center justify-start rounded-xl cursor-pointer`} onClick={onTap}>
            <img style={{fill:"red"}} src={item.icon} alt=""  />
            <p>{item.name}</p>
        </div>
    )
}

export default NavigationItem;