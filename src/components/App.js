import React from 'react'


const relatives = [
  "Relative1",
  "Relative2",
  "relative3",

];

const App = () => {
  return (
    <div id="main">
        <ol id='relativeList'>
            {relatives.map((relative,index) =>(
              <li id={'relativeListItem'${index+1}}>
                {relative}
              </li>
            ))}
        </ol>
    </div>
  )
}

export default App
