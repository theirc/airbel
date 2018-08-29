import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h3>React Example</h3>
        </div>
      </div>
    </div>
  );
};

export default App;

ReactDOM.render(<App />, document.getElementById('app'));
