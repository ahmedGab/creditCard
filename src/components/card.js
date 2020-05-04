import React, { Component } from 'react'

export default class Card extends Component {
    state={
        Number:'',stars:'****************',name:'',date:''
    }

    displayNumbers = (e) => {
    let RIB = "****************".split("");
    let Value = e.target.value;
    RIB.unshift(e.target.value);
    for (let i = 0; i < Value.length; i++) {
      RIB.pop();
    }
    let numbers = RIB.join("");
    if (Value.length > 4) {
      numbers = numbers.split(/(.{0,4})/g)
        .join(" ")
        .trim();
        
    } 
      if (/\d$/g.test(Value)) {
        this.setState({ Number: e.target.value, stars: numbers });
      } else {
        e.target.value = "";
      }
    
  };

  displayFullName=(e)=>{

    let a=e.target.value.toUpperCase()
      if((/[a-z A-Z]$/g).test(a) ){
        this.setState({name:a})
       
      }

    
 }

 displayDate=(e)=>{

          e.preventDefault();
    let b=e.target.value
    let m=b.slice(0,2)
    let y=b.slice(2,4)
    
if (/^0[1-9]{0,2}$/g.test(m) || /^1[0-2]{0,2}$/g.test(m) ){
    if(b.length >3 )
    if (/^2[0-5]$/g.test(y)){

b=`${m}/${y}`
    }
    else {

    b=m
    }

}


    
    else {
        b=""
        }


console.log(y)
this.setState({date:b})





    
}



    
    render() {
       
        

        return (
            <div className="menu">
 <div className="credit-card">
                <h3 className="card-number">{this.state.stars}</h3>
                <h3 className="card-name">{this.state.name}</h3>
                <h3 className="card-date">{this.state.date}</h3>                





            <form>
    <input type="text" placeholder="Credit Card Number"
          value={this.state.Number}
          onChange={this.displayNumbers} maxLength="16"/>
    

                <input type="text" name="name1" value={this.state.name} onChange={this.displayFullName} placeholder="FullName" maxlength="12"/>
                <input type="text" name="name2" value={this.state.date} onChange={this.displayDate}  maxLength="5" placeholder="MM/YY" />
               
            </form>
            </div>
            </div>
        )
    }



}
