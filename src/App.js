import React from "react";
import {User} from './components/User'
import {TodoCounter} from './components/TodoCounter'
import {TodoSearcher} from './components/TodoSearcher'
import {CreateItemButton} from './components/CreateItemButton'
import {NewTask} from './components/NewTask'


function App() {
  return (
    <>
      <User />
      <TodoCounter completed={0} total={0}/>
      <TodoSearcher />
      <CreateItemButton />
      <NewTask />
    </>
    )
}

export default App;
