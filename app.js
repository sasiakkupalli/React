

import React from "react";
import  ReactDOM from "react-dom/client";

//***React.createElement => React Element(object) => HTMLElement(render)
//React Element
/*const heading=React.createElement("h1",{id:"heading"},"Namaste React🚀 "); 
console.log(heading);*/

// ***React Elemet using JSX
//jsx is a html or xml like syntax
//JSX(transpiled before it  reaches the js)-PARCEL-Babel
//jsx =>  babel trnspiles it to React Element - (js object) => HTML Elemnet(render)

/*const heading=(
<h1 id="heading" className="head" >
    Namaste React using JSX🚀</h1>
)
console.log(heading);
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);*/


//***React Components
//1.class Based component-old
//2.Functional Based component-New

/*const Title = function() {
    return (
    <h1  id="heading" className="head" >
        Namaste React using JSX🚀
        </h1>
    )
};*/


 //component composition-composing 2 componets in one
const elem=<span>React Elment</span>

const Title=() => (
    <h1  id="heading" className="head" >
        Namaste React using JSX
        {elem}
        </h1>
       
    );

    //javascript takes care of these injection attacks like const data= api.getData();
    const number=1000
    
const HeadingComponent= () => (
    <div id="container">
    <Title />
     {number}
        <h2>{100+200}</h2>
        <h3>{console.log("evwsbhbahbxihsab")}</h3>
     <h1>Namaste React Functional Component🚀 </h1>
    </div>  
);




const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />)

//same as above
//const HeadingComponent2=()=> <h1>Namaste React Functional Component </h1>

/*const HeadingComponent3=()=> (
     <h1 className="heading">Namaste React Functional Component </h1>
);*/





//1st prob
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


    /* 
    const parent=React.createElement("div",
        {id:"parent"},[
        React.createElement("div",
            {id:"child"},[
            React.createElement("h1",{},"Tis is namaste react"),
            React.createElement("h2",{},"im h2 tag")] //array of list of siblings
        ),
        React.createElement("div",
            {id:"child2"},[
            React.createElement("h1",{},"im h1 tag"),
            React.createElement("h2",{},"im h2 tag")]
        ),
    ]);


    console.log(parent);//object

    const root = ReactDOM.createRoot(document.getElementById("root"));

    

    root.render(parent);*/
