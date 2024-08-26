import React from 'react';
import CounterApp from './CounterApp';
import FirstApp from './FirstApp';

const App = () => {
  return (
    <>
      <FirstApp
        title={'FirstApp'}
        subTitle={'CounterApp'}
        name={'Mariangel Acosta'}
      />
      <CounterApp value={100} />
    </>
  );
};

export default App;
