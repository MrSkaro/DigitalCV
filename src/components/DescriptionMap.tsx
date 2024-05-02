import React from 'react'


export default function DescriptionMap(props: any) {
    const { list, type } = props

    const contentDisplay: object = {
        'links': (obj: {name: string, link: string, content: string}) => <a href={obj.link} target='_blank' className='text-green-400 cursor-pointer'>{obj.content}</a>,
        'skills': (obj: {name: string, content: string[]}) => <p className='text-slate-200'>{obj.content.join(", ")}</p>,
        'work': (obj: {name: string, content: string}) => <p className='text-slate-200'>{obj.content}</p>,
        'hobbies': (obj: {name: string, content: string}) => <p className='text-slate-200'>{obj.content}</p>
    }

    return (
        <div className='flex flex-col gap-3'>
            {list.map((listItem: any, listIndex: number) => {
                return (
                <div className='relative group overflow-hidden flex items-center gap-1.5 flex-wrap text-xs sm:text-sm' key={listIndex}>
                    <div className='bg-green-600 duration-300 group-hover:translate-x-full h-[2px] w-full absolute right-full bottom-0'></div>
                    <p><b>{listItem.name}</b></p>
                    {contentDisplay[type as keyof Object](listItem)}
                    <p>{listItem.type}</p>
                </div>
                )
            })}
        </div>
    )
}

