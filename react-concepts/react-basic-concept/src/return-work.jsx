function App(){
    return ( //in return you are not abel to to pass two child if you want than it must be in some tags like <div>  because if you put all child inside one <div> it act as single child
        <h1>hey</h1>
        // <h2>ok</h2> (if you comment off then it show error)
    )
}

function App(){
    return(
        <div>
        <h1>hey</h1>
        <h2>ok</h2>
        </div>
    )
}