import React from 'react';
import Tabs from './Tabs/Tabs';

const styles = {
  fontFamily: 'sans-serif',
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {active: 'aTab'};
  }
  render() {
    const content = {
      aTab: 'Tab A',
      bTab: 'Tab B',
      cTab: 'Tab C',
    };
    return (
      <div style={styles} style={{textAlign:"center"}}>
        <h1 style={{textAlign:"center"}}>Tabs Example</h1>
        <div style={{textAlign:"center",width:"999px",border:"1px solid rgb(6, 33, 107)",height:"500px"}}>
        <Tabs
          active={this.state.active}
          onChange={active => this.setState({active})}
        >
          <div key="aTab">A Title</div>
          <div key="bTab">B Very Long Title</div>
          <div key="cTab">{this.state.active === 'bTab' ? 'Title' : 'Very Long Title'}</div>
        </Tabs>
        <h2>Content</h2>
        <p>{content[this.state.active]}</p>
      </div>
      </div>

    );
  }
};
export default App;