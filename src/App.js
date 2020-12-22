import React, { Component } from 'react';

class App extends Component {
  state = {
    hello: 'hello app js!',
    count: 0,
  };

  toggleChange = () => {
    if (this.state.hello=='hello app js!'){
      this.setState({
        hello:'bye app js!'
      });
    }
    else{
      this.setState({
        hello:'hello app js!'
      });
    }
  };

  countUp = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  render(){ 
    return (
      <div className="App">
        <h2>Index Props</h2>
        <div className = "props">
          { /* props 가 들어가는 부분 */}
        </div>
        <span>{this.props.message}</span>


        <h2>State</h2>
        <div className="state">
          {
            /*state가 들어가는 부분* */
          }
        </div>
        <div>{this.state.hello}</div>
        <div>{this.state.count}</div>
        <button onClick={this.toggleChange,this.countUp}>click me!</button>
     

        <h2>App Props</h2>
        <div className="inside-app-props">
          <InsideApp
            count={this.state.count}
            toggleChange={this.toggleChange}
            countUp={this.countUp}
          />
        </div>
     </div>

    );
  }
}
// 버튼을 클릭하면 글자가 hello<->bye 토글되고, 
// 버튼을 누르는 게 count 됨


class InsideApp extends Component{
  render(){
    return (
      <div>
        <div>{this.props.count}</div>
        <button onClick={this.props.countUp}>click ME!</button>
      </div>
    );
  }
}


export default App;
