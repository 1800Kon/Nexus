'use client'
import React, { useEffect } from 'react'

const SearchBar: React.FC = () => {
    return (<div >
        <input type="text" placeholder="Search the grid" className="input input-ghost w-full max-w-xs" />
    </div>);
};

export default SearchBar