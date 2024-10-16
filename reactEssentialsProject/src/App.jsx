//import componentsImg from "./assets/components.png";
import { CORE_CONCEPTS } from "./data.js";
import Header from "./components/Header/Header.jsx";
import CoreConcept from "./components/CoreConcept.jsx";
import TabButton from "./components/TabButton.jsx";

function App() {

  let tabContent = "Please click a button";

  function handleSelect(selectedButton){
    // selectedButton => 'components', 'jsx', 'props', 'state'
    //alert(selectedButton);
    tabContent = selectedButton;
    console.log(tabContent);
  }

  console.log("APP COMPONENT");

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {/* Passing Values as props : title, description, image */}
            <CoreConcept {...CORE_CONCEPTS[0]} /> {/*Using Spread Operator*/}
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            {/* Children Prop */}
            {/* Passing onSelect function function as a prop to TabButton component */}
            <TabButton onSelect={()=>handleSelect('components')}>Components</TabButton>
            <TabButton onSelect={()=>handleSelect('jsx')}>JSX</TabButton>
            <TabButton onSelect={()=>handleSelect('props')}>Props</TabButton>
            <TabButton onSelect={()=>handleSelect('state')}>State</TabButton>
          </menu>
          {tabContent}
        </section>
      </main>
    </div>
  );
}

export default App;
