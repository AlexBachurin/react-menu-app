import React from 'react'

export default function Categories({ category }) {
    //transform array from props to jsx 
    const categoryBtns = category.map(btn => {
        return (
            // and set unique key since its list
            <button key={Date.now() + Math.random()} className="filter-btn">{btn}</button>
        )
    })
    return (
        <div className="btn-container">
            {/* display category btns */}
            {categoryBtns}
        </div>
    )
}
