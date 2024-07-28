import React, { useState,useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import YearFormatted from "./YearFormatted";
import backIcon from "../assets/icons/arrow_back_28dp_0B5ED7.svg";
import store from '../store/store';
import defaultImg from '../assets/images/no_image-352x500.jpg';
function ItemDetails() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [data, setData] = useState([]);

    useEffect(() => {
        setData(store.getState().data);
    }, []);
    const item = data.find(item => item.imdbID === id);

    const displayDefault = (error) => {
        error.target.src = defaultImg;
    }

    return (
        item && (<div className="single container mt-4">
            <button title="Back" className="btn icon-btn mb-3"  onClick={() => navigate('/')} style={{
                  backgroundImage: `url(${backIcon})`
            }}></button>
            <h2>{item.Title}</h2>
            <YearFormatted dateString={item.Year}/>
            <p>Type: {item.Type}</p>

            <img
                src={item.Poster}
                className="img-fluid"
                alt={item.Title}
                onError={displayDefault}
            />

        </div> )
    );
}

export default ItemDetails;