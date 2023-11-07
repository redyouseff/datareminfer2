
import {Button, Col, Collapse, Container, Row} from"react-bootstrap"
import Head from "./componant/Head.js";
import Content from "./componant/Content.js";
import Action from "./componant/Button.js";
import { useState } from "react";

import"./App.css"
const person =[{id:1,name:"يوسف",time:"العاشره مساءا"},
{id:2,name:"احمد",time:"العاشره صباحا"},
{id:3,name:"محمد",time:"السادسه "}]


function App() {
  const [state,setstate]=useState(person);
  const delet=()=>{
    setstate([]);
  }
  const view=()=>{
    setstate(person)
  }
  return (
    <div className="App">
      <Head person={state} />
      <Content person={state} />
      <Action  delet={delet} view={view} />
      
      
   
    </div>
  );
}

export default App;
