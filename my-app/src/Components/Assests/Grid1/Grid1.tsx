import React from 'react'
import './Grid1.css'
const Grid1 = () => {
  return (
    <div>
        <div className="Grid1">
  <div className="Grid header1">Header</div>
  <div className="Grid sidebar1">Sidebar</div>
  <div className="Grid content1">Content
    <br /> If I add a footer to my markup and define a grid-area and place it on the grid using grid-template-areas you can see that it sits below the content column. There is no clearing required as this footer has a track on the grid, it can’t hop up into another track..</div>
  <div className="Grid footer">Footer</div>
</div>
    </div>
  )
}

export default Grid1