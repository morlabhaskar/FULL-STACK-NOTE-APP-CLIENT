import React, { useState } from 'react';
import { getInitials } from '../utils/emailHelper';
import { useNavigate } from 'react-router-dom';
import SearchBar from './cards/SearchBar';

const Navbar = () => {
  const navigate = useNavigate;
  const [searchQuery,SetSearchQuery] = useState("")
  const onLogout = () => {
    navigate("/login")
  }
  const handleSearch = () => {

  }
  const onClearSearch = () => {
    SetSearchQuery("")

  }
 
  return (
    <div className='bg-white flex justify-between items-center px-6 py-6 drop-shadow'>
        <h1 className='text-xl font-medium text-black'>NOTE APP</h1>
        <SearchBar
          value={searchQuery}
          onChange={({target}) => {
            SetSearchQuery(target.value)
          }}
          handleSearch={handleSearch}
          onClearSearch={onClearSearch}
        />
        <div className='flex items-center gap-4'>
          <div className=' bg-slate-300 h-9 w-9 p-2 rounded-3xl text-fuchsia-800 flex items-center justify-center'>
            <p>{getInitials("Bhaskar")}</p>
          </div>
          <div>
            <p className='text-sm font-medium'>Bhaskar</p>
            <button className='text-sm text-slate-800 cursor-pointer hover:text-red-600 ' onClick={onLogout}>Logout</button>
          </div>
        </div>
    </div>
  )
}

export default Navbar