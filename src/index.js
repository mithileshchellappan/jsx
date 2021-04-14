import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  state={lat:null,errMess:''};

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) =>this.setState({lat: position.coords.latitude,}),
      (err) =>this.setState({errMess: err.message,})
    );
  }
  componentDidUpdate(prevProps) {
    console.log("updated");
  }

  render() {
    if (this.state.errMess === "" && this.state.lat == null) {
      return <div>Loading</div>;
    } else {
      if (this.state.errMess === "") {
        return <div>Latitude: {this.state.lat}</div>;
      } else {
        return <div>Err {this.state.errMess}</div>;
      }
    }
  }
}
ReactDOM.render(<App />, document.querySelector("#root"));
