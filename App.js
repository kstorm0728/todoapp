import React from 'react';
// import EVForm from './component/EVForm';
import TodoList from './component/EVList';
import Header from './component/Header';
// import Main from './component/Main';
import './App.css';

class App extends React.Component {

  render() {
    return(
      <div className="ev-app">
        <Header />
        {/* <Main /> */}
        <TodoList />
      </div>
    );
  };
}

export default App;