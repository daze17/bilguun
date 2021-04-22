import React from 'react'

export default function BrowserFrame({children}) {
    return (
    <>
    <div className="container">
        <div className="top">
            <span className="dot" style={{background:"#ED594A"}}></span>
            <span className="dot" style={{background:"#FDD800"}}></span>
            <span className="dot" style={{background:"#5AC05A"}}></span>
        </div>
        <div>
            {children}
        </div>
    </div>
    <style jsx>{`
          .dot {
            height: 6px;
            width: 6px;
            background-color: #bbb;
            border-radius: 50%;
            display: inline-block;
            margin: 0 0 0 4px;
          }
          .container {
            border-top-left-radius: 4px;
            border-top-right-radius: 4px;
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
          }
          .top {
            padding: 0 0 0 0.5rem;
            background: #5a5a5f;
            border-top-left-radius: 4px;
            border-top-right-radius: 4px;
            height: 20px;
            display: flex;
            align-items: center;
          }
          
    `}</style>
    </>
    )
}
