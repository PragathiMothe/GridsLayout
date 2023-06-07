import React from 'react'
import './Boxalignemt.css'

const Aligment = () => {
  return (
    <div>
        <div className="Boxalignment">
  <div className="Boxalignment1 a1">
    <p>This is box A. </p>
    
  </div>
  <div className="Boxalignment1 b1">
    <p>This is box B.</p>
  
  </div>
  <div className="Boxalignment1 c1">
    <p>This is box C.</p>
   

  </div>
  <div className="Boxalignment1 d1">
    <p>This is box D.</p>
   
  </div>
  <div className="Boxalignment1 e1">
    <p>Each of the boxes on the left has a grid area of 3 columns and 3 rows (we're counting the gutter col/row). </p>
    <p>The align-items property is used to align the content inside each grid-area.</p>
    <p>Other values of align-items are:</p>
    <ul>
      <li>stretch</li>
      <li>start</li>
      <li>end</li>
      <li>center</li>
    </ul>
  </div>
</div>
    </div>
  )
}

export default Aligment;