import React from 'react';

import { ArbitraryList } from '@entities/arbitraryList/Arbitrary list.jsx';

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function App() {
  

  return (
    <>
      <h2>Arbitrary List</h2>
      <ArbitraryList items={arr} />
    </>
  )
}

export default App
