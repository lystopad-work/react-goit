import {Component} from "react";

// COMPONENT WITHOUT STATE

export class StateLessComponent extends Component {

    render() {

        const {onClearClick, title} = this.props;

        return (
            <button onClick={onClearClick}>
                {title}
            </button>
        )
    }
}