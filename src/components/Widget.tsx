import { ChatTeardropDots } from 'phosphor-react'

import { Popover } from '@headlessui/react'
import { Widgetform } from './WidgetForm'
import my_app from '../image/my_App.svg'
export function Widget() {
 

    return (
        <Popover className='absolute bottom-4 right-4 md:bottom-11 md:right-11 first-letter:flex flex-col items-end' >
            <img src={my_app} ></img>
           <Popover.Panel>
            <Widgetform/>
           </Popover.Panel>
        <Popover.Button  className='bg-brand-500 rounded-full  px-3 h-12 text-white flex items-center  group'>
            <ChatTeardropDots  size={50} className='w-6 h-6' />
            <span className='max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-linear'>
                <span  className='pl-2'></span>
                Feedback
            </span>
        </Popover.Button>
        </Popover>
    )
}