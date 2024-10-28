

export function CreateTodos(){ //firest word of function name must be in capital letter 
    return <div>
        <input style={{
       padding:10,
       margin:10,
       border: '2px solid black', 
       textAlign:'center',
       fontSize:'20px'
      
        }} 
        type="text" placeholder="Title"></input> 
        <br/><br/>
        <input style={{
       padding:10,
       margin:10,
       border: '2px solid black', 
       textAlign:'center',
       fontSize:'20px'
        }} 
         type="text" placeholder="Discreption"></input>
        <br/><br/><br/>
        <button style={{
            borderBlockColor:'ButtonShadow',
            margin:10,
            padding:10,
            color:'darkblack',
            textAlign:'center'
        }}>Create-Todo</button>
    </div>
}
// module.exports=createtodo();//this is old way to export the function you just need to write the export in firest