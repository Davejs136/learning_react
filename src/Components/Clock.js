import { Component } from 'react';

/* STATE AND LIFECYCLE */

class Clock extends Component {

    // Propiedades pasadas a los componentes
    constructor(props) {
        super(props);
        // State de la clase
        this.state = {date: new Date()};
    }

    // Acciona cuando componente se monto
    componentDidMount() {
        this.timerID = setInterval(
        () => this.tick(),
        1000
        );
    }

    // Acciona cuando componente se elimina
    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
        date: new Date()
        });
    }

    render() {
        return (
        <>
            <h1>Hello, World</h1>
            {/* <h2>It is {this.props.date.toLocaleTimeString()}.</h2> */}
            <h2>It is {this.state.date.toLocaleTimeString()}</h2>
        </>
        );
    }
} 

export default Clock;