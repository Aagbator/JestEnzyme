import React from 'react';
import './app.scss';
import Header from './component/header/header.component';
import Headline from './component/header/headline/headline.component';

function App() {
  return (
    <div className="App">
        <Header></Header>
        <main>
          <Headline header="Posts" desc="Click the button to render posts"></Headline>
        </main>
    </div>
  );
}

export default App;
