import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from './seasonDisplay';
import Spinner from './Spinner';
class App extends React.Component {
  state={lat:null,errMess:''};

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) =>this.setState({lat: position.coords.latitude,}),
      (err) =>this.setState({errMess: err.message,})
    );
  }

  render() {
    if (this.state.errMess === "" && this.state.lat == null) {
      return <Spinner/>;
    } else {
      if (this.state.errMess === "") {
        return <SeasonDisplay lat={this.state.lat}/>;
      } else {
        return <div>Err {this.state.errMess}</div>;
      }
    }
  }
}
ReactDOM.render(<App />, document.querySelector("#root"));
