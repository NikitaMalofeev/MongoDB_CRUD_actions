import React from 'react'
import SearchForm from '../SearchForm/SearchForm'
import Sort from '../Sort/Sort'
import ButtonSubmit from '../ButtonSubmit/ButtonSubmit'

const Feature = () => {
    
  return (
    <div style={{ display: 'flex', gap: 20, margin: '30px 0'}}>
        <SearchForm />

        <Sort />

        {/* { searchStart && <ButtonSubmit value='search]'/>}*/}
    </div>
  )
}

export default Feature