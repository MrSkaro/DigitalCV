import React from 'react'

export default function DescriptionMap(props) {
    const { list, type } = props

    const contentDisplay = {
        'links': (obj) => <a href={obj.link} target='_blank' className='text-green-400 cursor-pointer'>{obj.content}</a>,
        'skills': (obj) => <p className='text-slate-200'>{obj.content.join(", ")}</p>,
        'work': (obj) => <p className='text-slate-200'>{obj.content}</p>,
        'hobbies': (obj) => <p className='text-slate-200'>{obj.content}</p>
    }

    return (
        <div className='flex flex-col gap-3'>
            {list.map((listItem, listIndex) => {
                return (
                <div className='relative group overflow-hidden flex items-center gap-1.5 flex-wrap text-xs sm:text-sm' key={listIndex}>
                    <div className='bg-green-600 duration-300 group-hover:translate-x-full h-[2px] w-full absolute right-full bottom-0'></div>
                    <p><b>{listItem.name}</b></p>
                    {contentDisplay[type](listItem)}
                    <p>{listItem.type}</p>
                </div>
                )
            })}
        </div>
    )
}

