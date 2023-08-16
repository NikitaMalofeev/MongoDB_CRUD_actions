'use client'
import React from 'react'
import ButtonSubmit from '../ButtonSubmit/ButtonSubmit'
import useCustomRouter from '@/lib/hooks/useCustomRouter'
import style from './index.module.scss'

const SearchForm = () => {
    
    const { pushQuery, query} = useCustomRouter()

    async function handleSearch(formData) {
        const search = formData.get('search')
        pushQuery({search, page: 1})
    }

  return (
    <form className={style.form} action={handleSearch}>
        <input className={style.form__input}type="search" name="search" defaultValue={query.search || ''}/>

        <ButtonSubmit value='search'/>
    </form>
  )
}

export default SearchForm