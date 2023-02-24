import { loremIpsum } from 'lorem-ipsum';

import './App.css';

function Row({ item }) {
  return (
    <div key={item.id} className="row">
      <div className="image">
        <img src={item.image} alt="" />
      </div>
      <div className="content">
        <div>{item.name}</div>
        <div>{item.text}</div>
      </div>
    </div>
  );
}

function App() {
  const rowCount = 5000;
  const list = Array(rowCount).fill().map((val, idx) => {
    return {
      id: idx,
      name: 'John Doe',
      image: 'http://via.placeholder.com/40',
      text: loremIpsum({
        count: 1,
        units: 'sentences',
        sentenceLowerBound: 4,
        sentenceUpperBound: 8
      })
    }
  });

  return (
    <div className="App">
      <div className="list">
        {list.map((item, idx) => <Row item={item} key={idx}/>)}
      </div>
    </div>
  );
}

export default App;
