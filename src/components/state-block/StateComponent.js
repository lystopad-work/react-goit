import {Component} from "react";
import {StateLessComponent} from "./StateLessComponent";

export class StateComponent extends Component {

    static defaultProps = {
        title: 'Default props title'
    }

    // IT WORKS TOO
    // state = {
    //     counter: 0,
    // }
    constructor(props) {
        super(props);

        this.state = {
            counter: 0
        }


        // BIND FUNCTION CONTEXT
        this.handleMinus = this.handleMinus.bind(this)
        this.handlePlus = this.handlePlus.bind(this)
    }
    increment = () => this.setState({ ...this.state, counter: this.state.counter + 1});

    // NOT TO DO
    // this.state.newField = 'newField';
    doubleCounter = () => {
        // this.setState({...this.state, counter: this.state.counter * 2 })

        this.setState((prevState) => {
            return { counter: prevState.counter * 2 }
        })
    }
    clearState = () => {
        this.setState({ ...this.state, counter: 0 })
    }
    
    handlePlus(evt){
        
    }
    
    handleMinus(evt){
        
    }
    
    
    
    render() {

        console.log(this.state)

        const {title} = this.props;
        const {counter} = this.state;

        return (
           <div>
               <h1>
                   {title}
               </h1>
                <p>
                    {counter}
                </p>
               <div>
                   {/*Bad case*/}
                   <button onClick={() => {
                       this.setState({
                           ...this.state,
                           counter: counter - 1
                       })
                   }}>
                       Decrement
                   </button>
                   {/*good case*/}
                   <button onClick={this.increment}>
                       Increment
                   </button>
                   <button onClick={this.doubleCounter}>
                       Double
                   </button>
                   <StateLessComponent title='CLEAR STATE' onClearClick={this.clearState}/>



                   {/*USE FUNCTIONS WITH BIND CONTEXT */}
                   {/*<button type='button' onClick={this.handleMinus}>*/}
                   {/*    -*/}
                   {/*</button>*/}
                   {/*<button type='button' onClick={this.handlePlus}>*/}
                   {/*    +*/}
                   {/*</button>*/}
               </div>
           </div>
        )
    }
}

// export default StateComponent