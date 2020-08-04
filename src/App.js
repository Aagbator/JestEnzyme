import React from 'react';
import './app.scss';
import Header from './component/header/header/header.component';
import Headline from './component/header/headline/headline.component';

const tempArr = [{
  fName: 'Ben',
  lName: 'Smith',
  email: ' bensmith@gmail.con',
  age: 34,
  onlineStatus: true
}]

function App() {
  return (
    <div className="App">
        <Header></Header>
        <main>
          <Headline header="Posts" desc="Click the button to render posts" tempArr={tempArr}></Headline>
        </main>
    </div>
  );
}

export default App;
