import React, { useState } from 'react';
import './App.css';
import Categories from './Categories';
import Menu from './Menu';
import data from './data';

//get categories from data
const categories = data.map(item => {
  return item.category;
})
//get unique categories and add all category
const uniqCategoriesSet = new Set(['all', ...categories])
//and transform it into array
const uniqCategories = Array.from(uniqCategoriesSet);


function App() {
  //store menu data and categories
  const [menuList, setMenuList] = useState(data);
  const [category, setCategory] = useState('all')

  //filter by category
  const filterByCategory = (name) => {
    // //get new filtered filtered list by this category name
    // const filteredMenu = menuList.filter(item => item.category === name);
    setCategory(name);
  }

  const filterMenu = () => {
    //when we pass if category is by default 'all' we return our menulist from state, else we filter it
    if (category === 'all') {
      return menuList;
    } else {
      return menuList.filter(item => item.category === category);
    }
  }

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h1>Our Menu</h1>
          <div className="underline"></div>
        </div>
        <Categories filterByCategory={filterByCategory} category={uniqCategories} />
        {/* every time we render, before we pass menuList we should filter it */}
        <Menu menuList={filterMenu(menuList)} />
      </section>
    </main>
  );
}

export default App;
