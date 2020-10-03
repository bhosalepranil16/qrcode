import React from 'react';

import { Container } from 'react-bootstrap';
import Reader from './components/reader';
import Generator from './components/generator';
function App() {
  return (
    <Container>
      <Generator/>
      <Reader/>
    </Container>

  );
}

export default App;
