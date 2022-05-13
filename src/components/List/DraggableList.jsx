import React, { useState } from 'react'
import PropTypes from 'prop-types'

import './styles.css'
import DraggableListItem from './DraggableListItem'

const DraggableList = props => {
  const [data, setData] = useState(props.data)

  const [dragStartIndex, setDragStartIndex] = useState(null)

  // Get index of draged item
  const onDragStart = index => setDragStartIndex(index)

  // Update list when item dropped
  const onDrop = dropIndex => {
    // Get draged item
    const dragItem = data[dragStartIndex]
    // Delete draged item in list
    const list = [...data]
    list.splice(dragStartIndex, 1)

    // Update List
    if (dragStartIndex < dropIndex) {
      setData([
        ...list.slice(0, dropIndex - 1),
        dragItem,
        ...list.slice(dropIndex - 1, list.length)
      ])
    } else {
      setData([
        ...list.slice(0, dropIndex),
        dragItem,
        ...list.slice(dropIndex, list.length)
      ])
    }
  }

  return (
    <ul className="draggable-list">
      {data.map((item, index) => (
        <DraggableListItem
          key={index}
          index={index}
          onDragStart={index => onDragStart(index)}
          onDrop={index => onDrop(index)}
        >
          {props.renderItemContent(item)}
        </DraggableListItem>
      ))}
      {/*
        Add Last  item so you can darg item to Last position
        Last item dont need onDragStart because it can not be draged
      */}
      <DraggableListItem
        key={data.length}
        index={data.length}
        // onDragStart={index => onDragStart(index)}
        draggale={false}
        onDrop={index => onDrop(index)}
      />
    </ul>
  )
}

DraggableList.propTypes = {
  data: PropTypes.array,
  renderItemContent: PropTypes.func
}

export default DraggableList
