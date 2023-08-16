'use client'
import useCustomRouter from '@/lib/hooks/useCustomRouter'
import React from 'react'

const Pagination = ({totalPage}) => {
    const newArray = [...Array(totalPage)].map((_, i) => i + 1)

const { pushQuery, query} = useCustomRouter()

  return (
    <div style={{display: 'flex', gap: 10, margin: '30px 0', paddingLeft: '50px'}}>
        {
            newArray.map(page => (
                <button key={page} onClick={() => pushQuery({page})}
                style={{background: (query.page || 1) === page ? '#D7CBFF' : ''}}>
                    {page}
                </button>
            ))
        }
    </div>
  )
}

export default Pagination