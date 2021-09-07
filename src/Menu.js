import React from 'react'

export default function Menu({ menuList }) {
    return (
        <div className="section-center">
            {
                menuList.map(({ id, title, price, img, desc }) => {
                    return (
                        <article key={id} className="menu-item">
                            <img src={img} alt={title} className="photo" />
                            <div className="item-info">
                                <header>
                                    <h4>{title}</h4>
                                    <h4 className="price">${price}</h4>
                                </header>
                                <div className="item-text">
                                    {desc}
                                </div>
                            </div>
                        </article>
                    )
                })
            }
        </div>
    )
}
