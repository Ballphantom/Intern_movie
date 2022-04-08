import React from 'react'
import MovieCom from '../components/MovieCom'

function List() {
  return (
    <div>
      <div className='grid grid-cols-3 items-center justify-items-center gap-10  '>
        <MovieCom />

      </div>
    </div>
  )
}

export default List