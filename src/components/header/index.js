import React, { useState } from 'react'
import breakingBadLogo from '../../assets/Breaking_Bad_logo.svg'
import { FiSearch } from 'react-icons/fi';
import { useDispatch } from 'react-redux';
import { Actions } from '../../store/ducks/character'
import { Link } from 'react-router-dom'

import './style.css';
const Header = () => {

  const dispatch = useDispatch();

  const handleSearch = () => {
    if (searchTerm && searchTerm.length >= 4)
      dispatch(Actions.requestSearch(searchTerm))
  }
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      console.log('teste')
      setSearch(e.target.value);
      handleSearch();
    }
  }

  const [searchTerm, setSearch] = useState('');

  return (
    <header className='header'>
      <Link to="/">
        <img src={breakingBadLogo} alt='Breaking Bad Logo' height='60' />
      </Link>

      <div className="searchContainer">
        <input type="text" placeholder="Pesquise os personagens"
          onChange={e => setSearch(e.target.value)}
          onKeyDown={handleKeyDown} />
        <button onClick={handleSearch}><FiSearch /></button>
      </div>

    </header>
  )
}

export default Header
