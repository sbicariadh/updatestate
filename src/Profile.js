import React, { Component } from 'react'

export default class Profile extends Component {
    constructor(){
        super(),
        this.state={   
            timer:0,
            intervall:null


           }
    }
    add=()=>{
        this.setState({
            counter:this.state.counter +1
        })
    }

    componentDidMount(){
     this.setState({
        intervall:setInterval(
            ()=>this.setState({timer:this.state.timer + 1}),1000
        )
     })
    }
   
  render() {
    return (
      <div>
         <div>
     <h1>name:Riadh </h1>
     <h2>full Name: Sbica</h2>
     <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRapTgdFcm0fAZqbM6CGRYtfF9pdzwT1pYbQA&usqp=CAU"/>
     <h2>bio:nothing to say</h2>
     <h2>profession:R.achat</h2>
    </div>
    {this.state.timer}
      </div>
    )
  }
}
