import {Component} from "react";
import {TodoItem} from "./TodoItem";
import {idAdder} from "../../helpers/idAdder";
import defaultTodos from "../../data/default-items.json";
import "./LifeCycle.css";
import {Modal} from "../modal/Modal";

const defaultTodoArray = idAdder(defaultTodos);
export class LifeCycle extends Component {

    constructor(props) {
        super(props);

        this.state = {
            todos: [],
            isLoading: false,
            error: false,
            isModalOpen: false
        }
    }

    componentDidMount() {
        // console.log('Mounted')

        if (this.state.todos.length === 0) {
            setTimeout(() => this.setState({todos: defaultTodoArray}), 2000)
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        // console.log('Updated, prev state', prevState)
        // console.log('Current State', this.state)
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        // console.log('Updated, Next props', nextProps)
        // console.log('Next State', nextState)

        // const clicks = this.state.clicks;
        //
        // if (clicks + 1 === nextState.clicks) {
        //     return false
        // }

        return true;
    }

    componentDidCatch(error, errorInfo) {
        console.log('error', error)
        console.log('errorInfo', errorInfo)
    }

    onRemoveTodoClick = id => {
        this.setState(prev => (
            {
                ...prev,
                todos: this.state.todos.filter(todo => todo.id !== id)
            })
        )
    }

    onCompleteTodoClick = id => {
        this.setState(prev => (
            {
                ...prev,
                todos: this.state.todos.map(todo => todo.id === id ? {...todo, completed: true} : todo)
            }
        ))
    }

    modalHandler = () => {
        this.setState((prev) => ({...prev, isModalOpen: !this.state.isModalOpen}))
    }

    render() {
        const {todos, loading, error, isModalOpen} = this.state;
        return (
            <div className='todos-container'>
                <button type='button' onClick={this.modalHandler}>
                    LET'S OPEN MODAL
                </button>
                <ul className='todos-wrapper'>
                    {
                        todos.map(currentItem =>
                            <TodoItem
                                item={currentItem}
                                onRemoveClick={this.onRemoveTodoClick}
                                onCompleteClick={this.onCompleteTodoClick}
                                key={currentItem.id}
                            />
                        )
                    }
                </ul>
                { isModalOpen && <Modal title='MODAL WINDOW' handleClose={this.modalHandler}/> }
            </div>
        )
    }
}