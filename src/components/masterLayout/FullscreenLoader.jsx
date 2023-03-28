import React from 'react'

const FullscreenLoader = () => {
  return (
    <div>
      <div className={"LoadingOverlay d-none"}>
        <div className="Line-Progress">
          <div className="indeterminate"></div>
        </div>
      </div>
    </div>
  )
}

export default FullscreenLoader