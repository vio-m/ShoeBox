import Search from '@material-ui/icons/Search';
import { DataContext } from "../context/dataContext";
import { useState, useContext } from 'react';


export const SearchBar = (props) => {
    const searchQuery = props.searchQuery
    const setSearchQuery = props.setSearchQuery
    const data = useContext(DataContext);



    const handleSubmit = (e) => {
        e.preventDefault();
        const results = Object.values(data.products).filter((key)=> key.description.toLowerCase().includes(searchQuery.toLowerCase())) 

        setSearchQuery('')

        props.onStateUpdate(1);
        props.updateResults(results)
    };


    return (
        <div className="searchbar">
            <form onSubmit={handleSubmit} method="GET">
                <input
                    value={searchQuery}
                    onInput={e => setSearchQuery(e.target.value)}
                    type="text"
                    id="header-search"
                    placeholder="Search..."
                    name="s"
                />
            </form>
            <Search style={{color:'gray', fontSize:'16px', paddingLeft:'5px'}} onClick={handleSubmit}/>
        </div>
    )
};



/* 



*/
