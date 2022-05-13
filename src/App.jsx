import './App.css'

import { listData } from './assets/listData'
import DraggableList from './components/List/DraggableList'
import Card from './components/Card/Card'

function App() {
  return (
    <>
      <h1 className="header">React com lista de drag e drop</h1>
      <DraggableList
        data={listData}
        renderItemContent={item => LessonCard(item)}
      />
    </>
  )
}

const LessonCard = item => <Card item={item} />

export default App
