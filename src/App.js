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
  const [category, setCategory] = useState(uniqCategories)
  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h1>Our Menu</h1>
          <div className="underline"></div>
        </div>
        <Categories category={category} />
        <Menu menuList={menuList} />
      </section>
    </main>
  );
}

export default App;
