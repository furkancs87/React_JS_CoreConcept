import { CORE_CONCEPTS } from './data.js';
import Header from './components/Header/Header.jsx';
import CoreConcept from './components/CoreConcept.jsx';
import TabButton from './components/TabButton.jsx';
import { useState } from 'react';
import { EXAMPLES } from './data.js';
//BU BİR DENEMEDİR
/*
function CoreConcept(props) {
  return (
    <li>
      <img src={props.image} alt={props.title} />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </li>
  );
}
*/
//instead of props use object destructuring

function App() {
  //let tabContent = 'Please click a button';
  const [selectedTopic, setSelectedTopic] = useState('');

  function handleSelect(selectedButton) {
    // selectedButton => 'components', 'jsx', 'props', 'state'
    // console.log('Hello World - selected!');
    //console.log(selectedButton);
    //tabContent = selectedButton;
    setSelectedTopic(selectedButton);
    //console.log(tabContent);
    //console.log(selectedTopic);
  } //end function handleSelect

  console.log('APP COMPONENT EXECUTING');

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((conceptItem) => (
              <CoreConcept key={conceptItem.title} {...conceptItem} />
            ))}

            {/*
            <CoreConcept 
               title={CORE_CONCEPTS[0].title}
               description={CORE_CONCEPTS[0].description}
               image={CORE_CONCEPTS[0].image}
            />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />
            */}
        </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton isSelected={selectedTopic === 'components'}
                       onSelect={() => handleSelect('components')}
            >
              Components
            </TabButton>
            <TabButton isSelected={selectedTopic === 'jsx'}
                      onSelect={() => handleSelect('jsx')}
            >
              JSX
            </TabButton>
            <TabButton isSelected={selectedTopic === 'props'}
                      onSelect={() => handleSelect('props')}
            >
              Props
            </TabButton>
            <TabButton isSelected={selectedTopic ==='state'}
                       onSelect={() => handleSelect('state')}
            >
              State
            </TabButton>
          </menu>
          {!selectedTopic && <p>Please select a topic.</p>}

          {selectedTopic && (
            <div id="tab-content">
              <h3>{EXAMPLES[selectedTopic].title}</h3>
              <p>{EXAMPLES[selectedTopic].description}</p>
              <pre>
                <code>{EXAMPLES[selectedTopic].code}</code>
              </pre>
            </div>
          )}
          {/*{selectedTopic}*/}
        </section>
      </main>
    </div>
  );
}

export default App;
