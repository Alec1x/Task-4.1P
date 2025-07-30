import React from 'react';

const SearchBar = ({ searchTerm, setSearchTerm, handleSearch }) => {
    return (
        <form onSubmit={handleSearch} className="search-form">
            <input
                type="text"
                placeholder="Search articles, tutorials..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
            />
            <button type="submit" className="search-button">
                <i className="search-icon">Search</i>
            </button>
        </form>
    );
};

export default SearchBar;