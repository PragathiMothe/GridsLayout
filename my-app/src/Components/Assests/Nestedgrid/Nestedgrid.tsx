import React from 'react'
import './Nestedgrid.css'
const Nestedgrid = () => {
  return (
    <div>
        <div className="NestedGrid">
  <div className="NestedGrid1 aa">A</div>
  <div className="NestedGrid1 bb">B</div>
  <div className="NestedGrid1 cc">C</div>
  <div className="NestedGrid1 dd">
    <div className="NestedGrid1 ee">E</div>
    <div className="NestedGrid1 ff">F</div>
    <div className="NestedGrid1 gg">G</div>
  </div>
</div>
    </div>
  )
}

export default Nestedgrid