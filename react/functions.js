/* --------------------------------------------------- */
/* A simple counter */
/* --------------------------------------------------- */
class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
        this.reset = this.reset.bind(this);
    }
    increment() {
        this.setState(state => ({
            count: state.count + 1
        }));
    }
    decrement() {
        this.setState(state => ({
            count: state.count - 1
        }));
    }
    reset() {
        this.setState(state => ({
            count: 0
        }));
    }
    render() {
        return (
            <div>
                <button className='inc' onClick={this.increment}>Increment!</button>

            </div>
        )
    }
 }
/* --------------------------------------------------- */
/* Create a controlled input */
/* --------------------------------------------------- */
class ControlledInput extends React.Component {
    constructor(props) {
        super(props);
        //initialized with input that holds an empty string
        this.state = {
            input: ''
        };
        this.handleChange = this.handleChange.bind(this);
    }
    //method with (event) as parameter
    //receives an event object from the input element below(div)
    handleChange(event) {
        this.setState({
            input: event.target.value
            //event.target.value accesses this string from the html and updates
        });
    }
    render() {
        return (
            <div>
                {/* value is equal to the input property of the components state. initially empty string. */}
                {/* onchange allows input box to register changes from the state of the input box */}
                {/* Summary: value gets sent to state, onchange registers the changes */}
                <input value={this.state.input} onChange={this.handleChange.bind(this)}>{this.value}</input>
                <h4>Controlled Input:</h4>
                <p>{this.state.input}</p>
            </div>
        );
    }
 };
/* --------------------------------------------------- */
/* */
/* --------------------------------------------------- */

/* --------------------------------------------------- */
/* */
/* --------------------------------------------------- */

/* --------------------------------------------------- */
/* */
/* --------------------------------------------------- */

/* --------------------------------------------------- */
/* */
/* --------------------------------------------------- */

/* --------------------------------------------------- */
/* */
/* --------------------------------------------------- */

/* --------------------------------------------------- */
/* */
/* --------------------------------------------------- */

/* --------------------------------------------------- */
/* */
/* --------------------------------------------------- */

/* --------------------------------------------------- */
/* */
/* --------------------------------------------------- */