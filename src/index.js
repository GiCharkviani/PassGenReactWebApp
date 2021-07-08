import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App/App';
import reportWebVitals from './reportWebVitals';
import YourPass from './Components/YourPass/yourPass';
import History from './Components/History/history';

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = { appear: false , appearH: false};
    this.changeAppear = this.changeAppear.bind(this);
    this.changeAppearH = this.changeAppearH.bind(this);
  }

  changeAppear(here){
      this.setState({appear: here})
  }
  changeAppearH(here){
    this.setState({appearH: here})
  }

  render() {
    let appear = this.state.appear;
    let appearH = this.state.appearH;
    
    return (
      <div>
        {!appear && !appearH && <App appear={this.changeAppear} appearH={this.changeAppearH}/>}
        {appear && <YourPass appear2={this.changeAppear}/>}
        {appearH && <History appear3={this.changeAppearH}/>}
      </div>
    )
  }
}

export default Index;

ReactDOM.render(
  <React.StrictMode>
    <Index />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

