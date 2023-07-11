import {Component} from "react";
import './Modal.css';

export class Modal extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        window.addEventListener('keydown', this.keyBoardListener)
        this.interval = setInterval(() => console.log('interval'), 1000)
    }
    componentWillUnmount() {
        window.removeEventListener('keydown', this.keyBoardListener)
        clearInterval(this.interval)
    }

    keyBoardListener = () => {
        console.log('clicked ')
    }

    render() {
        return (
            <div className='modal-wrapper'>
                <h1>Title</h1>
                {this.props.children}
                <button type='button' onClick={this.props.handleClose} className='modal-close-button'>
                    Close button
                </button>
            </div>
        );
    }
}