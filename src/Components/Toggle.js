import { Component } from 'react';

/* HANDLING EVENTS */

class Toggle extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        isToggleOn: true
      };
  
      // Este binding es necesario para hacer "this" en el callback
      // y poder acceder al state | setState
      this.handleClick = this.handleClick.bind(this);
    }
  
    handleClick() {
      this.setState(state => ({
        isToggleOn: !state.isToggleOn
      }));
    }
  
    render() {
      return (
        <button onClick={this.handleClick}>
          {this.state.isToggleOn ? 'ON' : 'OFF'}
        </button>
      );
    }
}

export default Toggle;