import React from "react";

function TabButton({ children, onSelect, isSelected }){
/*
   document.querySelector('button').addEventListener('click', () => {

   });
*/
  /* function handleClick() {
      console.log('Hello World');
   }
  */
   console.log('TABBUTTON COMPONENT EXECUTING');
   return (
    <li>
      <button className={isSelected ? 'active' : undefined} onClick={onSelect}>{children}</button>
    </li>
   );
}

/*
You can use object destructuring instead of props

   function TabButton({children}) {
      return <li><button>{children}</button></li>
   }
*/


export default TabButton;