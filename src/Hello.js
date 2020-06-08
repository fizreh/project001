import React from 'react';
import logo from './logo.svg';
import './App.css';
import './Hello.css'

/*const hello = ({name})=> "Hello World" + name;
function hello({name}){
return "Hello World" + name;
}*/

function Hello({firstName}) {
return <p className='myname'>This is Para in Hello in Tag name: {firstName}</p>
   

}

export default Hello;
