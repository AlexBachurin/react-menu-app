import React from 'react'

export default function Categories({ category, filterByCategory }) {
    //transform array from props to jsx 
    const categoryBtns = category.map(btn => {
        return (
            // set unique key since its list + trigger function from our props with clicked category btn name
            <button onClick={() => filterByCategory(btn)} key={Date.now() + Math.random()} className="filter-btn">{btn}</button>
        )
    })
    return (
        <div className="btn-container">
            {/* display category btns */}
            {categoryBtns}
        </div>
    )
}
