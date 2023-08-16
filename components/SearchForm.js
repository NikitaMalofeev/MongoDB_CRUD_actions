'use client'
import React from 'react'
import ButtonSubmit from './ButtonSubmit'
import useCustomRouter from '@/lib/hooks/useCustomRouter'

const SearchForm = () => {
    
    const { pushQuery, query} = useCustomRouter()

    async function handleSearch(formData) {
        const search = formData.get('search')
        pushQuery({search, page: 1})
    }

  return (
    <form action={handleSearch}>
        <input type="search" name="search" defaultValue={query.search || ''}/>

        <ButtonSubmit value='search'/>
    </form>
  )
}

export default SearchForm