import {Component} from "react";

const INITIAL_STATE = {
    login: '',
    password: '',
    agree: false,
    gender: null,
    age: '',
    isSelectClicked: false
}

const dataArray = [
    {id: 1, name: 'login'},
    {id: 2, name: 'password'}
];

const Gender = {
    MALE: 'male',
    FEMALE: 'female'
}
export class RegistrationForm extends Component {

    state = {
        ...INITIAL_STATE
    }

    onSubmit = event => {
        event.preventDefault();

        if (!this.state.isSelectClicked && !this.state.age) {
            return console.log('NOT SUBMIT');
        }

        console.log(`You login as ${this.state.login} with password ${this.state.password}`)
    }

    onReset = () => {
        this.setState(INITIAL_STATE)
    }

    handleChange = (event) => {
        const { name, value, type } = event.target;

        if (type === 'checkbox') {
            return this.setState((prevState => ({...prevState, agree: event.target.checked })))
        }

        this.setState({ [name]: value })
    }

    handleSelect = () => {
        this.setState({isSelectClicked: true})
    }

    render() {

        const { agree, gender, age} = this.state;

        return (
            <form style={{marginTop: '20px'}} onSubmit={this.onSubmit}>
                {
                    dataArray.map(item => (
                      <label key={item.id}>
                          {item.name}
                          <input type='text'
                                 onChange={this.handleChange}
                                 value={this.state[item.name]}
                                 name={item.name}
                          />
                      </label>
                  )
                    )
                }
                {/*<label>*/}
                {/*    Login*/}
                {/*    <input type="text" name='login' onChange={this.handleChange} value={login}/>*/}
                {/*</label>*/}
                {/*<label>*/}
                {/*    Password*/}
                {/*    <input type="text" name='password' onChange={this.handleChange} value={password}/>*/}
                {/*</label>*/}



                <label htmlFor='test'>Login</label>
                <input type="text" name='exampleHtmlFor' id='test'/>


                <div>
                    <input type="checkbox" onChange={this.handleChange} checked={agree}/>
                </div>

                <div>
                    <label>
                        Male
                        <input
                            type="radio"
                            checked={gender === Gender.MALE}
                            name='gender'
                            value={Gender.MALE}
                            onChange={this.handleChange}
                        />
                    </label>

                    <label>
                        Female
                        <input
                            type="radio"
                            checked={gender === Gender.FEMALE}
                            name='gender'
                            value={Gender.FEMALE}
                            onChange={this.handleChange}
                        />
                    </label>
                </div>

                <div>
                    <label>
                        Select age
                        <select name="age" value={age} onChange={this.handleChange}
                                onClick={this.handleSelect}>
                            <option value='' disabled={age !== ''}>

                            </option>
                            <option value="25">
                                25
                            </option>
                            <option value="15">
                                15
                            </option>
                        </select>
                    </label>
                </div>


               <div>
                   <button type='submit'>
                       SUBMIT
                   </button>
                   <button type='button' onClick={this.onReset}>
                       RESET
                   </button>
               </div>
            </form>
        );
    }
}