import React from 'react'
function Forget() {
  return (
    <div>
        <video loop autoPlay muted id="bg-video">
            <source src={require("./video.mp4.mp4")} type="video/mp4"/>
        </video>
      <div align="center" className='aligning'>
        <h4>There is no access to change the password please contact the administrator</h4>
      </div>
    </div>
  )
}
export default Forget;