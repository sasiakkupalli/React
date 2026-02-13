import React from "react";
import ReactDOM from "react-dom/client";

//4th problem🚀 
//React Componet
//1.classbased component- old way of writing code
//2.Functional component-New 
//exploring Functional component

//syntax 1
/*const HeadingComponent=() => {
    return <h1 className="heading">React Functional Component</h1>;
};*/

//syntax 2
/*const HeadingComponent=() => (
     <h1 className="heading">React Functional Component🚀</h1>
);*/


//1st way:placing reactElement inside ReactComponent
/*const elem=<span>ReactElement </span>
const title= (
    <h1 className="head">
        {elem}
        Namaste React Using JSX
    </h1>
);


const number=1000
const HeadingComponent=() => (
    <div id="container">
        {title}
        {number}
        <h2>{100+200}</h2>
    <h1 className="heading">React Functional Component🚀</h1>
    </div>
);

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);*/

//2nd way: placing HeadingComponent inside Title ie ReactElement
/*const number=1000
const HeadingComponent=() => (
    <div id="container">
        
        {number}
        <h2>{100+200}</h2>
    <h1 className="heading">React Functional Component🚀</h1>
    </div>
);


const elem=<span>ReactElement </span>
const title= (
    <h1 className="head">
        {elem}
        Namaste React Using JSX
        <HeadingComponent />
    </h1>
);


const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(title);*/

//1st problem🚀 
/*const parent=React.createElement("div",{id:"parent"},[

React.createElement("div",{id:"child1"},[
    React.createElement("h1",{},"Im an h1 tag"),
    React.createElement("h2",{},"im an h2 tag"),
]),
React.createElement("div",{id:"child2"},[
    React.createElement("h1",{},"Im an h1 tag"),
    React.createElement("h2",{},"im an h2 tag"),
]),

]);

console.log(parent);
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);*/


//2nd prob🚀 
//React.createElement => object => HTMLElement(render)
/*const heading = React.createElement("h1",{id:"heading"},"NamasteReact🚀");
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);*/


//3rd problem🚀 
//JSX-is a javascript sysntax
//jsx => ReactcreateElement => ReactElement-(js-object) =>HTML Element(render)
//JSX(transpiled before it reaches the js )-PARCEL-Babel
//babel= is ajavascript compiler/translator
// JSX syntax
//const jsxHeading=<h1>Namaste React using JSX</h1>;
