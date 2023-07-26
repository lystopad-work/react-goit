import {Component} from "react";

export class TodoItem extends Component {
    static defaultProps = {
        item: {
            title: '',
            completed: false,
            id: new Date().toString()
        }
    }

    render() {
        const { item, onRemoveClick, onCompleteClick } = this.props;
        const { title, completed, id } = item;
        return (
            <li className={completed ? 'completed' : ''}>
                <h5>{title}</h5>
                <button type='button' onClick={() => onRemoveClick(id)}>
                    Remove
                </button>
                <button type='button' onClick={() => onCompleteClick(id)}>
                    Complete
                </button>
            </li>
        );
    }
}