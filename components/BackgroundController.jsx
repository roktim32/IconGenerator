import React, { useContext, useEffect, useState } from 'react'
import { Slider } from './ui/slider'
import ColorPickerController from './ColorPickerController'
import { UpdateStorageContext } from '@/context/UpdateStorageContext'

const BackgroundController = () => {
    const [rounded, setRounded] = useState(0)
    const [padding, setPadding] = useState(40)
    const [color, setColor] = useState("#000")
    const storageValue = JSON.parse(localStorage.getItem('value'))
    const { updateStorage, setUpdateStorage } = useContext(UpdateStorageContext)

    useEffect(() => {
        const updateValue = {
            ...storageValue,
            bgRounded: rounded,
            bgPadding: padding,
            bgColor: color
        }
        setUpdateStorage(updateValue)
        localStorage.setItem('value', JSON.stringify(updateValue))
    }, [rounded, padding, color])
    return (
        <div className=''>
            <div>
                <div className='py-2'>
                    <label className='py-2 flex justify-between items-center'>Rounded <span>{rounded} px</span></label>
                    <Slider defaultValue={[0]} max={512} step={1} onValueChange={(event) => setRounded(event[0])} />
                </div>
                <div className='py-2'>
                    <label className='py-2 flex justify-between items-center'>Padding <span>{padding} px</span></label>
                    <Slider defaultValue={[40]} max={100} step={1} onValueChange={(event) => setPadding(event[0])} />
                </div>
                <div className='py-2'>
                    <label className='py-2 flex justify-between items-center'>Background Color</label>
                    <ColorPickerController hideController={false} selectedColor={(color) => setColor(color)} />
                </div>
            </div>

        </div>
    )
}

export default BackgroundController