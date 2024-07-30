import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'
import { Download } from 'lucide-react';

const Header = () => {
    return (
        <div className=' flex justify-between p-4 shadow-sm border items-center '>
            <h1 className='text-4xl font-bold'>test</h1>
            <Button className="flex gap-2 items-center"><Download className='h-4 w-4' />Downlaod</Button>
        </div>
    )
}

export default Header