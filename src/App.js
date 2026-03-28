import React from 'react'
import './assets/styles/style.css'

//option 1
const App = () => {
    return (
        <>
            {/* <h1>Hello world</h1> */}
            <div className='page-title'>Title</div>
            <div className='container'>
                <div className='col-1'>
                    <h4>To Do</h4>
                    <div>Hello</div>
                    <div>Hello 2</div>
                </div>
                <div className='col-2'>Hi</div>
            </div>
        </>
    )
}
export default App;