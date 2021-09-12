import React, {useState} from 'react';
import {useHistory} from "react-router-dom";

const Search = () => {
    const [search, setSearch] = useState('')
    const history = useHistory() //
    const handleInput = (e) => {
        setSearch(e.target.value)
    }

    const handleSearch = () => {
        if (search.trim()) {
            history.push(`/browse/${search}`)
        }
    }
    return (
        <div>
            <input onKeyPress={el=>{if(el.key === "Enter")handleSearch()}} type="text" onChange={handleInput}/>
            <button onClick={handleSearch} className="btn-srch">Search</button>
        </div>
    );
};

export default Search;