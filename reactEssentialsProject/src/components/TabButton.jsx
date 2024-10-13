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
  return (
    <li>
      <button>{children}</button>
    </li>
  );
}

export default TabButton;
