

 /*const heading=React.createElement(
        "h1",
        {id:"heading", xyz:"abc"},
        "Hello world from React!");
        
        console.log(heading);//object

    const root=ReactDOM.createRoot(document.getElementById("root"));

    root.render(heading);*/


//2nd prob
    /*
    <div id="parent"> //object=parent
    <div id="child">
        <h1>im h1 tag</h1>
        <h2>im h2 tag</h2> //sibling
    </div>

    <div id="child2">
        <h1>im h1 tag</h1>
        <h2>im h2 tag</h2> //sibling
    </div>
</div>
*/


    const parent=React.createElement("div",
        {id:"parent"},[
        React.createElement("div",
            {id:"child"},[
            React.createElement("h1",{},"im h1 tag"),
            React.createElement("h2",{},"im h2 tag")] //array of list of siblings
        ),
        React.createElement("div",
            {id:"child2"},[
            React.createElement("h1",{},"im h1 tag"),
            React.createElement("h2",{},"im h2 tag")]
        ),
    ]);


    console.log(parent);//object

    const root=ReactDOM.createRoot(document.getElementById("root"));

    root.render(parent);
