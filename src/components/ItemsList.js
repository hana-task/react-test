import React from 'react';
import EditableItem from './EditableItem';

function ItemsList({ items, isGridView, onUpdate, type }) {
    return (
            <div className={`tab-pane pt-3 ${isGridView ? 'active' : ''}`} id={type} key={type}>
                    <div className={`row ${isGridView ? 'row-cols-1 row-cols-md-3' : ''}`}>

            {items.map(item => (
                <EditableItem key={item.imdbID} item={item} onUpdate={onUpdate} isGridView={isGridView} />
            ))}
                </div>
            </div>

    );
}

export default ItemsList;
