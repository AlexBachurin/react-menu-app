import React from 'react'
import MenuItem from './MenuItem'

export default function Menu({ menuList }) {
    return (
        <div className="section-center">
            {
                menuList.map((menuItem) => {
                    return (
                        <MenuItem key={menuItem.id} menuItem={menuItem} />
                    )
                })
            }
        </div>
    )
}
