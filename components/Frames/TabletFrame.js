import React from 'react'

export default function TabletFrame({children}) {
    return (
    <>
    <div className="tablet">
            {children}
    </div>
    <style jsx>{`
.tablet {
    position: relative;
    border: 14px #5a5a5f solid;
    border-top-width: 40px;
    border-bottom-width: 20px;
    border-radius: 25px;
  }
  
  /* The horizontal line on the top of the device */
  .tablet:before {
    content: '';
    display: block;
    width: 60px;
    height: 5px;
    position: absolute;
    top: -20px;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #333;
    border-radius: 10px;
  }       
  /* The horizontal line on the top of the device */
    `}</style>
    </>
    )
}
