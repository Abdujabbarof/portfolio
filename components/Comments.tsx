import React from 'react'

const Comments = ({ idx }: { idx: number }) => {
  return (
    <div className={`w-full border border-accent-foreground ${idx === 0 || idx == 1 || idx == 3 ? 'sm:row-span-3' : 'sm:row-span-4'} ${ idx === 3 ? 'sm:col-start-2 sm:col-end-3' : idx === 4 ? 'sm:col-start-3 sm:col-end-4' : ''}`}>
        <h1 className='p-[8px] w-full text-[16px] leading-0 font-semibold'>Languages</h1>
        <p className='p-[8px] w-full border-t border-accent-foreground text-muted-foreground'>
            SQLite PostgreSQL Mongo
        </p>
    </div>
  )
}

export default Comments