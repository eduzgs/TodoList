import React from "react";
import {User} from './components/User'
import {TodoCounter} from './components/TodoCounter'
import {TodoSearcher} from './components/TodoSearcher'
import {CreateItemButton} from './components/CreateItemButton'


function App() {
  return (
    <>
      <User />
      <TodoCounter completed={0} total={0}/>
      <TodoSearcher />
      <CreateItemButton />
    </>
    )
}

export default App;
