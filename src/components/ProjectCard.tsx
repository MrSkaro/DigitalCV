import React from 'react'

export default function ProjectCard(props: any) {
    const { project, index } = props
    return (
        <div className={'flex flex-col md:grid md:grid-cols-2 justify-center items-center'}>
            <div>
                <a href={project.link} target='_blank' className='cursor-pointer'>
                    <img className='bg-green-400 hover:opacity-60 duration-200' src={project.imgLink}/>
                </a>
            </div>
            <div className={'flex flex-col gap-4 pt-4 pb-12 ' + (index % 2 === 0 ? 'md:order-first' : 'md:order-last')}>
                <h2 className='text-center text-2xl sm:text-3xl md:text-4xl font-semibold'>{project.name}</h2>
                <p className='text-xs sm:text-sm text-justify px-8 sm:px-12 '>{project.description}</p>    
            </div>
        </div>
    )
}