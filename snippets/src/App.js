import React from 'react';
import 'antd/dist/antd.css';
import './index.css';
import { Popover, Button } from 'antd';

class App extends React.Component {
  state = {
    visible: false,
  }
  hide = () => {
    this.setState({
      visible: false,
    });
  }
  handleVisibleChange = (visible) => {
    this.setState({ visible });
  }
  render() {
    return (
      <Popover
        content={<a onClick={this.hide}>Close</a>}
        title="Title New"
        trigger="click"
        visible={this.state.visible}
        onVisibleChange={this.handleVisibleChange}
      >
        <Button type="primary">Click me</Button>
      </Popover>
    );
  }
}

export default App;