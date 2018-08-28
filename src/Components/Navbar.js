import React,{Fragment} from 'react';
import {Navbar} from 'react-bootstrap';



export default class NavBar extends React.Component{
    constructor (props){
        super(props);
        this.state={
         currencies: [],
        }
    }
    render(){
        return (
    
    <Navbar fixedTop>
        <Navbar.Header>
        <Navbar.Brand>
            <a href="#home">Currency Convertor</a>
        </Navbar.Brand>
        <Navbar.Toggle />
        </Navbar.Header>
        </Navbar>
        
        )
    }
}
