import React from 'react'
class App extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            text: 'Amanda',
            placeholder: 'Type your name here ...',
            name:'',
            hasLoaded: false
        }


    }

    handleInputChange = (e) => {
        this.setState({name: e.target.value})
    }

    buttonClick = (hasLoaded) => {
        this.setState({hasLoaded})
    }

    // componentDidMount(){
    //     this.setState({hasLoaded: true})
    // }

    render(){
        if(this.state.hasLoaded){

            return (

                <>
                <h1>{this.props.name} {this.state.text}</h1>
                <input 
                placeholder={this.state.placeholder}
                onChange={(e) => {this.handleInputChange(e)}}
                />
                <button onClick={() => {this.buttonClick(this.state.hasLoaded=true)}}
    >           CLICK ME
                </button>
                </>
            
            )


        }else{

            return(
                <>
                <h1>Loading...</h1>
                <button onClick={() => {this.buttonClick(this.state.hasLoaded=true)}}
    >           CLICK ME
                </button>
                </>
            )
        }
        
    
    }
}

// let App = (props) => (
//     <>
//     <h1>{props.name}</h1>
//     </>
// )

export default App;

