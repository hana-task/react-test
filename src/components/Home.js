import React, { useState, useEffect } from 'react';
import Tabs from './Tabs';
import ItemsList from './ItemsList';
import 'bootstrap/dist/css/bootstrap.min.css';
import clearIcon from '../assets/icons/search_off_24dp_0B5ED7.svg';
import refreshIcon from '../assets/icons/refresh_28dp_0B5ED7.svg';
import sortIcon from '../assets/icons/sort_by_alpha_28dp_0B5ED7.svg';
import listIcon from '../assets/icons/list_28dp_0B5ED7.svg';
import gridIcon from '../assets/icons/grid_view_28dp_0B5ED7.svg';
import apiService from '../services/apiService';
import store from '../store/store';
import { SetData } from '../store/reducer';


function Home() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [activeType, setActiveType] = useState('movie');
    const [isGridView, setIsGridView] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [sortOrder, setSortOrder] = useState('asc');

    useEffect(() => {
        fetchData();
    }, []);
    const fetchData = async() => {
        setLoading(true);
        const response = await apiService('/response.json');
        setData(response.results)
        store.dispatch(SetData(response.results));
        setLoading(false);
    }

    if (loading) {
        return <div>Loading...</div>;
    }


    const types = data.reduce((acc, item) => {
        if (!acc[item.Type]) {
            acc[item.Type] = [];
        }
        acc[item.Type].push(item);
        return acc;
    }, {});

    const updateItem = async(id, newTitle) => {
        console.log(id, newTitle);
        const body =JSON.stringify({ id, newTitle })
        // קריאת ה-API לעדכון הפריט
        const reaspone = await apiService('/api/update-item', 'POST', body);
        // if(reaspone.status === 'success')

        // עדכון הנתונים במצב המקומי של האפליקציה
        const updateData = data.map(item => {
            if (item.imdbID === id) {
                return { ...item, Title: newTitle };
            }
            return item;
        });
        setData(updateData);
        store.dispatch(SetData(updateData));
    };

    const handleTabClick = (type) => {
        setActiveType(type);
    };

    const toggleView = () => {
        setIsGridView(!isGridView);
    };

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSearchReset = () => {
        setSearchTerm('');
    };

    const toggleSortOrder = () => {
        setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    };

    const sortedItems = [...data].sort((a, b) => {
        if (sortOrder === 'asc') {
            return a.Title.localeCompare(b.Title);
        } else {
            return b.Title.localeCompare(a.Title);
        }
    });

    const filteredItems = sortedItems.filter(item => {
        const search = searchTerm.toLowerCase();
        return (
            item.Title.toLowerCase().includes(search) ||
            item.Year.includes(search)
        );
    });

    const itemsToShow = filteredItems.filter(item => item.Type === activeType); ;

    return (

        <div className="container mt-4">
            <div className="mb-3">
                <div className="search-container">
                    <input
                        type="text"
                        placeholder="Search..."
                        value={searchTerm}
                        onChange={handleSearchChange}
                    />
                    <button title="clear search" className="btn icon-btn mb-3 clear" onClick={handleSearchReset} style={{
                                backgroundImage: `url(${clearIcon})`
                            }}></button>
                </div>

            </div>
            <div className="mb-3 text-start">
                <button  title="Refresh Data" className="btn icon-btn mb-3" onClick={fetchData} style={{
                    backgroundImage: `url(${refreshIcon})`
                }}></button>
                <button title={`Sort ${sortOrder === 'asc' ? 'Descending' : 'Ascending'}`} className="btn icon-btn  mb-3" onClick={toggleSortOrder} style={{
                    backgroundImage: `url(${sortIcon})`,
                   }}>

                </button>
                <button title={isGridView ? 'Switch to List View' : 'Switch to Grid View'} className="btn icon-btn mb-3" onClick={toggleView} style={{
                    backgroundImage: `url(${isGridView ? listIcon : gridIcon})`,
                  }}>
                </button>
            </div>
            <Tabs types={types} activeType={activeType} onTabClick={handleTabClick} />
            <ItemsList items={itemsToShow} isGridView={isGridView} type={activeType} onUpdate={updateItem}/>
        </div>
    );
}

export default Home;
