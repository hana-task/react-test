import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import YearFormatted from "./YearFormatted";
import defaultImg from '../assets/images/no_image-352x500.jpg';

function EditableItem({ item, onUpdate ,isGridView}) {
    const [isEditing, setIsEditing] = useState(false);
    const [newTitle, setNewTitle] = useState(item.Title);

    const handleDoubleClick = () => {
        setIsEditing(true);
    };

    const handleBlur = () => {
        setIsEditing(false);
        if (newTitle !== item.Title) {
            onUpdate(item.imdbID, newTitle);
        }
    };

    const handleChange = (event) => {
        setNewTitle(event.target.value);
    };

    const displayDefaultImg = (error) => {
        error.target.src = defaultImg;
    }

    return (

        <div className={`col mb-3 ${isGridView ? 'grid col-md-4' : 'list col-12'}`} key={item.imdbID}>
            <div className={`card ${isGridView ? '' : 'flex-row'}`}>
                    <Link to={`/item/${item.imdbID}`}>
                            <img
                                src={item.Poster}
                                alt={item.Title}
                                className="card-img-top img-hover-zoom"
                                onError={displayDefaultImg}
                            />

                    </Link>

                    <div className="card-body d-flex">
                        {isEditing ? (
                            <input
                                type="text"
                                value={newTitle}
                                className="card-img-top"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                autoFocus
                            />
                        ) : (
                            <h5 className="card-title" onDoubleClick={handleDoubleClick}>{item.Title}</h5>
                        )}
                        <YearFormatted dateString={item.Year}/>
                    </div>
           </div>

        </div>
    );
}

export default EditableItem;
