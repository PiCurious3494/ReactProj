import React, { Component } from 'react';
import './index.css'
class TimeTable extends React.Component {	
	constructor(props) {
		super(props);
        this.state = {
            showPopup: false,
            times : [
                {id: '9', time: '9:00am', name:'', phone:''},
                {id: '10', time: '10:00am', name:'', phone:''},
                {id: '11', time: '11:00am', name:'', phone:''},
                {id: '12', time: '12:00pm', name:'', phone:''},
                {id: '13', time: '1:00pm', name:'', phone:''},
                {id: '14', time: '2:00pm', name:'', phone:''},
                {id: '15', time: '3:00pm', name:'', phone:''},
                {id: '16', time: '4:00pm', name:'', phone:''},
                {id: '17', time: '5:00pm', name:'', phone:''}
            ]
        };
        this.togglePopup =  this.togglePopup.bind(this);
	
	
    }

	
togglePopup(id) {

	console.log(id);
    this.setState({
      showPopup: 
	  {
		  [id]:true
	  }
    });
	
  }	
 



	
	
	render() {
	
		return <ul>
		{this.state.times.map(times => (
			<li key={times.id}>
			<button className="timeBtn" onClick={() => this.togglePopup(times.id)} id='' >{times.time}</button>			
			{this.state.showPopup[times.id] ? <Popup currentTime={times} timeClick={() => this.togglePopup()} />
			  : null
			}
			 </li>
		))}
		</ul>
	}
	
	 
}


function Popup(props) {
    return (
		<form>
		  <div className='popup'>
			<div className='popup_inner'>
			<button className="closeBtn" onClick={props.handleClick}>X</button>
			  <p>Please enter your name and phone number.</p>

			  <div className='innerText'>
			  <p>
					<label>
						Name:
						<input 
						name="name"
						value={props.name} 
						/>
					</label>
					</p>
					<p>
					  <label>
						Phone:
						<input 
						name="phone"
						value={props.phone} 
						/>
					</label>
					</p>
					</div>
					
			<button onClick={props.handleClick}>Enter</button>
			
			  
			</div>
		  </div>
	 </form>
    );
}




class App extends Component {
/*	
	    constructor(props) {
        super(props);
        this.state = {
            selectedItem :{},
            showForm: false,
            times: []
        };
        this.handleClick=this.handleClick.bind(this);
    }
	
	const divStyle = {
	color: '#FF5E66'	
};
	/
handleClick () {  //handleClick should contain props
	//Mostly JS way
	let times = [];
	times = props.slice(); 
	let len = times.length;
	for (let i = 0; i < len; i++) {
    if (props[i].id === times[i].id) {
      times.name = props.name;
	  times.phone = props.phone;
	  //push to array
    }
  }
	//React try
 this.setState((state) => {
	 times:state.slice((t) => t.id === times.id )
 });
   return <div className"App" style={divStyle}><TimeTable/></div>;
}
*/
	
  render() {
	  
    return (
      <div className='App'>
        <TimeTable/>			
		</div>
    );
  }
}

export default App;
