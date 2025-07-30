import React, { useState } from 'react';
import SearchBar from './SearchBar';

import './Navbar.css';

const Navbar = () => {
    const [searchTerm, setSearchTerm] = useState('');

    // 处理搜索提交
    const handleSearch = (e) => {
        e.preventDefault();
        if (searchTerm.trim()) {
            alert(`搜索内容: ${searchTerm}`); // 实际项目中替换为API调用或路由导航
            setSearchTerm('');
        }
    };

    return (
        <nav className="navbar">
            <div className="navbar-brand">

                <span>DEV@Deakin</span>
            </div>



            <div className="navbar-search">
                <SearchBar
                    searchTerm={searchTerm}
                    setSearchTerm={setSearchTerm}
                    handleSearch={handleSearch}
                />
            </div>

            <div className="navbar-actions">
                <button className="login-button">Login</button>
            </div>
        </nav>
    );
};

export default Navbar;