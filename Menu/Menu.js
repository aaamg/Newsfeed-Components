/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

/* 

  Step 1: Write a function that will create a menu component as seen below: x

  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div>

  The function takes an array as its only argument. x

  Step 2: Inside this function, iterate over the array creating a list item <li> element for each item in the array. x
  Add those items to the <ul>

  Step 3: Using a DOM selector, select the menu button (the element with a class of 'menu-button') currently on the DOM. x

  Step 4: add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on the menu (your div with a 'menu' class). x

  Step 5: return the menu component. x

  Step 6: add the menu component to the DOM. x
  
*/let header = document.querySelector('.header')
header.appendChild(menuComponent(menuItems));

function menuComponent(array){
  const div = document.createElement('div');
  const ul = document.createElement('ul');

  
  div.appendChild(ul);
  div.classList.add('menu');

  array.forEach(element => {
    const li = document.createElement('li');
    li.textContent = element;
    ul.appendChild(li);
  })

  //let header = document.querySelector('.header')
  const menuBtn = document.querySelector('.header');

  menuBtn.addEventListener('click', (e) => {
    console.log('clicked', e.target)
    div.classList.toggle('menu--open')
  })

  return div

};

menuComponent.appendChild(menuComponent(menuItems));
















































// const menuButton = document.querySelector('.header');

// function createMenu(items){
//   //create elements
//   const menu = document.createElement('div');
//   const ul = document.createElement('ul');
//   //structure
//   menu.appendChild(ul);
//   //class names
//   menu.classList.add('menu');
//   //forEach
//   // menuItems.forEach((item) => {
//   //       let li = document.createElement('li');
//   //       li.textContent = item;
//   //       ul.appendChild(li);
//   //     })

//   function listCreator(listText) {
//     const listEL = document.createElement('li');
//     listEL.textContent = listText;
//     return listText;
//   }
//   items.forEach(e => {
//     ul.appendChild(listCreator(e));
//   })

//   //event listener
//   menuButton.addEventListener('click', e => {
//     console.log('button is clicked', e.target);
//     menu.classList.toggle('menu--open');

    
//   })
  
//   return menu

// };

// menuButton.appendChild(createMenu(menuItems.items));

