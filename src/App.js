import {Footer} from './components/footer'
import {Header} from './components/header'

import RouteSwitch from './RouteSwitch';
import { createContext } from 'react';

function App() {
  return (
    <>
        <Header />
          <RouteSwitch />
        <Footer />
    </>
  );
}

export default App
export const bag = createContext([]);
