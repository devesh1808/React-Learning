// using props
// function TabButton(props) {
//   return (
//     <li>
//       <button>{props.children}</button>
//     </li>
//   );
// }


// using object destructuring
function TabButton({ children }) {

  function handleClick(){
    alert("Bhai Hai!")
  }

  return (
    <li>
      <button onClick={handleClick}>{children}</button>
    </li>
  );
}

export default TabButton;
