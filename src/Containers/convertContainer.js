import React,{Fragment} from 'react';
import './convertor.css';
import NavBar from '../Components/Navbar';
import SimpleCard from '../Components/Cards';
import currency from './currency';
import {Typeahead} from 'react-bootstrap-typeahead'; 
import 'react-bootstrap-typeahead/css/Typeahead.css';
export default class ConvertCont extends React.Component{
   constructor (props){
       super(props);
       this.state={
        currencies:['CAD','IDR','GBP','CHF','SGD','INR','MYR','JPY','KRW'],
        baseVal:1,
        curarr:[],
        currencyNames:currency
       }
   }
   componentDidMount(){
        fetch('https://api.exchangeratesapi.io/latest?base=USD')
        .then(response=> {
        return response.json();
        })
        .then(myJson=>{
            debugger
        this.setState({Currarr:myJson},()=>{
            this.calculateExe();
        });
        });
   }
   removeItem=(index)=>{
       debugger
      let arr= this.state.curarr.slice(index+1);
      this.setState({curarr:arr});
   }
   calculateExe=()=>{
     let showCurrencies=[...this.state.currencies];
     let currencyVal={...this.state.Currarr};
   let cur=  showCurrencies.map((item,index)=>{
    return {name:item,Fname:this.state.currencyNames[item].name,rate:currencyVal.rates[item]};
   });
   this.setState({curarr:cur});
   
   
   }
   handleChange=(ev)=>{
       debugger
       this.setState({baseVal:ev.target.value})
   }
   addCurrency=()=>{
      if(this.state.curInput){
       let pos = this.state.curarr.map(function(e) { return e.name }).indexOf(this.state.curInput);
       if(pos>-1){
           alert("currency already in the list");
       }else{
       let curarr=[...this.state.curarr];
       let currencyVal={...this.state.Currarr};
       curarr.push({name:this.state.curInput,Fname:this.state.currencyNames[this.state.curInput].name,rate:currencyVal.rates[this.state.curInput]})
         this.setState({curarr});  
    }
      }
   }

   render(){
       return(
           <div className="container-fluid" style={{height:'100%'}}>
              <div className="container">
                 <div>
                 <NavBar/>
                 </div>
                 <div style={{marginTop:'8%',border:1,borderColor:'#000',backgroundColor:'#cococo',marginBottom:'2%'}}>
                  Base Currency   USD: <input type="number" placeholder="Enter the vaule" value={this.state.baseVal} onChange={(ev)=>this.handleChange(ev)}/>
                  </div>
                  List of Currencies    
                  <div style={{textAlign:'left',marginTop:'2%',display:'grid',gridTemplateColumns:'auto auto', justifyContent:'space-evenly',
                  grid: 10, gridGap: '10px'}}>
                  <div style={{gridRow:1/3}}>
                  {this.state.curarr?<div style={{display:'flex',justifyContent:'center',flexDirection:'row'}}> <text></text>
                  <div >Add Currencies <Typeahead
                  onChange={(selected) => {
                  this.setState({curInput:selected[0]});
                  }}
                  options={this.state.currencies} bsSize='small'
                />
                <button style={{marginTop:'2%'}} onClick={()=>this.addCurrency()}>Add</button>
                </div>
                 </div>:''}
                  </div>
                  
                  {this.state.curarr &&
                    this.state.curarr.map((item,ind)=>(
                        <div key={ind}>                       <SimpleCard val={this.state.baseVal*item.rate} cur={item.name} fullname={item.Fname} curval={item.rate} removeItem={this.removeItem} index={ind} />
                        </div>
 
                    ))      }
                    
                  </div>
                
                


               </div>

           </div>
       )
   }





}