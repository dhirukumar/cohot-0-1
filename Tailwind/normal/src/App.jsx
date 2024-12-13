import { useState } from 'react'

function App() {
  return (
      <div>
       {/* <Flex></Flex> */}
       <Grid/>
      </div>
  )
}
//flex and justifyContent(space-between,space-around,center,flen-start,flex-end)
// function Flex(){
//   return <div style={{display:"flex",justifyContent:"space-around"}}> 
//     <div style={{backgroundColor:"black",fontSize:50}}>okkkkkkkkkkk</div>
//     <div style={{backgroundColor:"blue"}}>okkkkkkkkkkk</div>
//     <div style={{backgroundColor:"pink"}}>okkkkkkkkkkk</div>
//   </div>
// }

//gred 
function Grid() {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateRows: "100px auto 100px", // Correct property and value
        gridTemplateColumns: "1fr 2fr 1fr", // Correct property and value
        gap: "10px", // Proper gap syntax
      }}
    >
      <div style={{ backgroundColor: "black", color: "white" }}>Item 1</div>
      <div style={{ backgroundColor: "blue", color: "white" }}>Item 2</div>
      <div style={{ backgroundColor: "red", color: "white" }}>Item 3</div>
    </div>
  );
}



// 1. display: grid;
// This makes the container a grid container, enabling the use of grid layout properties.
// 2. grid-template-rows: 100px auto 100px;
// Specifies the height of each row in the grid:
// 100px: The height of the first row (e.g., header).
// auto: The second row adjusts its height to fit its content (e.g., main content).
// 100px: The height of the third row (e.g., footer).
// 3. grid-template-columns: 1fr 2fr 1fr;
// Defines the width of the grid columns:
// 1fr: The first column takes 1 fraction of the available space.
// 2fr: The second column takes 2 fractions of the available space.
// 1fr: The third column takes 1 fraction of the available space.
// Note: Fractions (fr) divide the available space proportionally among columns.

// 4. gap: 10px;
// Sets a uniform spacing of 10px between rows and columns in the grid.

export default App
