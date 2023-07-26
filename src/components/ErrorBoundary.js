import {Component} from "react";

export class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    componentDidCatch(error, info) {
        this.setState({hasError: true});

        console.log('error', error)
        console.log('info', info)
    }

    render() {
        if (this.state.hasError) {
            return <h1>Щось пішло не так.</h1>;
        }

        return this.props.children;
    }
}