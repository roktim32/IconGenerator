import { UpdateStorageContext } from '@/context/UpdateStorageContext'
import { icons } from 'lucide-react'

import React, { useContext, useEffect, useState } from 'react'

const LogoPreview = () => {

    const [storageValue, setStorageValue] = useState()
    const { updateStorage, setUpdateStorage } = useContext(UpdateStorageContext)

    useEffect(() => {
        const storageData = JSON.parse(localStorage.getItem('value'))
        console.log(storageData)
        setStorageValue(storageData);
    }, [updateStorage])

    const Icon = ({ name, color, size, rotate }) => {
        const LucidIcon = icons[name];
        if (!LucidIcon) {
            return;
        }
        return <LucidIcon color={color} size={size}
            style={{
                transform: `rotate(${rotate}deg)`
            }}
        />
    }
    return (
        <div className='flex justify-center items-center h-screen'>
            <div className='h-[400px] w-[400px] bg-gray-200 outline-dotted outline-gray-300'
                style={{
                    padding: storageValue?.bgPadding
                }}
            >
                <div className='h-full w-full flex items-center justify-center' style={{
                    borderRadius: storageValue?.bgRounded,
                    background: storageValue?.bgColor,
                }}>
                    <Icon name={storageValue?.icon} color={storageValue?.iconColor} size={storageValue?.iconSize} rotate={storageValue?.iconRotate} />
                </div>
            </div>
        </div>
    )
}

export default LogoPreview