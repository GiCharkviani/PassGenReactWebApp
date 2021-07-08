import React from 'react';
import './App.css';

const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const symbols = ['@', '!', '#', '$', '%', '^', '&', '*', '?', '<', '>', '|', '/', '=', '+', '-', '~', ','];
const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];

const symbolsMatching = /^[!@#$%^&*()_+\-=\]{};:~\\|,<>?]*$/;
const alphabetUpperMatching = /[A-Z]/g;
const alphabetLowerMatching = /[a-z]/;



let passwordArray = [];
let passHistArray = [];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { length: 4, password: '', copied: false, check: false };
    this.generatePassword = this.generatePassword.bind(this);
    this.faceIutput = this.faceIutput.bind(this);
    this.copy = this.copy.bind(this);
    this.range = this.range.bind(this);
    this.changeFace = this.changeFace.bind(this);
    this.changeFaceH = this.changeFaceH.bind(this);
  }


  generatePassword() {
    let newArr = [];
    //ინფუთების შენახვა
    const numberChecked = document.querySelector('#number').checked;
    const symbolChecked = document.querySelector('#symbols').checked;
    const upperCaseChecked = document.querySelector('#uppercase').checked;
    const lowerCaseChecked = document.querySelector('#lowercase').checked;


    //პაროლის გენიალური გენერირება (ცოტა გრძლად)
    if (numberChecked && symbolChecked && upperCaseChecked & lowerCaseChecked) {
      passwordArray = [];
      passwordArray = passwordArray.concat(symbols, alphabet, numbers, alphabet.map(upper => upper.toUpperCase()));

      for (let i = 0; i < 1000; i++) {
        if (symbolChecked && numberChecked && upperCaseChecked && lowerCaseChecked && newArr.some(arr => arr.match(symbolsMatching)) && newArr.some(upper => upper.match(alphabetUpperMatching)) && newArr.some(lower => lower.match(alphabetLowerMatching)) && newArr.some(num => parseInt(num))) {
          break;
        } else {
          newArr = []
          for (let i = 0; i < this.state.length; i++) {
            newArr.push(passwordArray[Math.floor(Math.random() * passwordArray.length)]);
          };
        }
      }
    }

    else if (numberChecked && symbolChecked && upperCaseChecked) {
      passwordArray = [];
      passwordArray = passwordArray.concat(symbols, numbers, alphabet.map(upper => upper.toUpperCase()));

      for (let i = 0; i < 1000; i++) {
        if (symbolChecked && numberChecked && upperCaseChecked && newArr.some(arr => arr.match(symbolsMatching)) && newArr.some(upper => upper.match(alphabetUpperMatching)) && newArr.some(num => parseInt(num))) {
          break;
        } else {
          newArr = []
          for (let i = 0; i < this.state.length; i++) {
            newArr.push(passwordArray[Math.floor(Math.random() * passwordArray.length)]);
          };
        }
      }
    }

    else if (numberChecked && symbolChecked && lowerCaseChecked) {
      passwordArray = [];
      passwordArray = passwordArray.concat(symbols, numbers, alphabet);

      for (let i = 0; i < 1000; i++) {
        if (symbolChecked && numberChecked && lowerCaseChecked && newArr.some(arr => arr.match(symbolsMatching)) && newArr.some(lower => lower.match(alphabetLowerMatching)) && newArr.some(num => parseInt(num))) {
          break;
        } else {
          newArr = []
          for (let i = 0; i < this.state.length; i++) {
            newArr.push(passwordArray[Math.floor(Math.random() * passwordArray.length)]);
          };
        }
      }
    }

    else if (numberChecked && upperCaseChecked && lowerCaseChecked) {
      passwordArray = [];
      passwordArray = passwordArray.concat(numbers, alphabet, alphabet.map(upper => upper.toUpperCase()));

      for (let i = 0; i < 1000; i++) {
        if (numberChecked && upperCaseChecked && lowerCaseChecked && newArr.some(upper => upper.match(alphabetUpperMatching)) && newArr.some(lower => lower.match(alphabetLowerMatching)) && newArr.some(num => parseInt(num))) {
          break;
        } else {
          newArr = []
          for (let i = 0; i < this.state.length; i++) {
            newArr.push(passwordArray[Math.floor(Math.random() * passwordArray.length)]);
          };
        }
      }
    }

    else if (symbolChecked && upperCaseChecked && lowerCaseChecked) {
      passwordArray = [];
      passwordArray = passwordArray.concat(symbols, alphabet, alphabet.map(upper => upper.toUpperCase()));

      for (let i = 0; i < 1000; i++) {
        if (symbolChecked && upperCaseChecked && lowerCaseChecked && newArr.some(arr => arr.match(symbolsMatching)) && newArr.some(upper => upper.match(alphabetUpperMatching)) && newArr.some(lower => lower.match(alphabetLowerMatching))) {
          break;
        } else {
          newArr = []
          for (let i = 0; i < this.state.length; i++) {
            newArr.push(passwordArray[Math.floor(Math.random() * passwordArray.length)]);
          };
        }
      }
    }

    else if (numberChecked && symbolChecked) {
      passwordArray = [];
      passwordArray = passwordArray.concat(symbols, numbers);

      for (let i = 0; i < 1000; i++) {
        if (symbolChecked && numberChecked && newArr.some(arr => arr.match(symbolsMatching)) && newArr.some(num => parseInt(num))) {
          break;
        } else {
          newArr = []
          for (let i = 0; i < this.state.length; i++) {
            newArr.push(passwordArray[Math.floor(Math.random() * passwordArray.length)]);
          };
        }
      }
    }

    else if (numberChecked && upperCaseChecked) {
      passwordArray = [];
      passwordArray = passwordArray.concat(numbers, alphabet.map(upper => upper.toUpperCase()));

      for (let i = 0; i < 1000; i++) {
        if (numberChecked && upperCaseChecked && newArr.some(upper => upper.match(alphabetUpperMatching)) && newArr.some(num => parseInt(num))) {
          break;
        } else {
          newArr = []
          for (let i = 0; i < this.state.length; i++) {
            newArr.push(passwordArray[Math.floor(Math.random() * passwordArray.length)]);
          };
        }
      }
    }

    else if (numberChecked && lowerCaseChecked) {
      passwordArray = [];
      passwordArray = passwordArray.concat(numbers, alphabet);

      for (let i = 0; i < 1000; i++) {
        if (numberChecked && lowerCaseChecked && newArr.some(lower => lower.match(alphabetLowerMatching)) && newArr.some(num => parseInt(num))) {
          break;
        } else {
          newArr = []
          for (let i = 0; i < this.state.length; i++) {
            newArr.push(passwordArray[Math.floor(Math.random() * passwordArray.length)]);
          };
        }
      }
    }

    else if (upperCaseChecked && lowerCaseChecked) {
      passwordArray = [];
      passwordArray = passwordArray.concat(alphabet, alphabet.map(upper => upper.toUpperCase()))

      for (let i = 0; i < 1000; i++) {
        if (upperCaseChecked && lowerCaseChecked && newArr.some(upper => upper.match(alphabetUpperMatching)) && newArr.some(lower => lower.match(alphabetLowerMatching))) {
          break;
        } else {
          newArr = []
          for (let i = 0; i < this.state.length; i++) {
            newArr.push(passwordArray[Math.floor(Math.random() * passwordArray.length)]);
          };
        }
      }
    }

    else if (symbolChecked && upperCaseChecked) {
      passwordArray = [];
      passwordArray = passwordArray.concat(symbols, alphabet.map(upper => upper.toUpperCase()));

      for (let i = 0; i < 1000; i++) {
        if (symbolChecked && upperCaseChecked && newArr.some(arr => arr.match(symbolsMatching)) && newArr.some(upper => upper.match(alphabetUpperMatching))) {
          break;
        } else {
          newArr = []
          for (let i = 0; i < this.state.length; i++) {
            newArr.push(passwordArray[Math.floor(Math.random() * passwordArray.length)]);
          };
        }
      }
    }

    else if (symbolChecked && lowerCaseChecked) {
      passwordArray = [];
      passwordArray = passwordArray.concat(symbols, alphabet);

      for (let i = 0; i < 1000; i++) {
        if (symbolChecked && lowerCaseChecked && newArr.some(arr => arr.match(symbolsMatching)) && newArr.some(lower => lower.match(alphabetLowerMatching))) {
          break;
        } else {
          newArr = []
          for (let i = 0; i < this.state.length; i++) {
            newArr.push(passwordArray[Math.floor(Math.random() * passwordArray.length)]);
          };
        }
      }
    }

    else if (lowerCaseChecked) {
      passwordArray = [];
      passwordArray = passwordArray.concat(alphabet);

      for (let i = 0; i < 1000; i++) {
        if (lowerCaseChecked && newArr.some(lower => lower.match(alphabetLowerMatching))) {
          break;
        } else {
          newArr = []
          for (let i = 0; i < this.state.length; i++) {
            newArr.push(passwordArray[Math.floor(Math.random() * passwordArray.length)]);
          };
        }
      }
    }

    else if (upperCaseChecked) {
      passwordArray = [];
      passwordArray = passwordArray.concat(alphabet.map(upper => upper.toUpperCase()));

      for (let i = 0; i < 1000; i++) {
        if (upperCaseChecked && newArr.some(upper => upper.match(alphabetUpperMatching))) {
          break;
        } else {
          newArr = []
          for (let i = 0; i < this.state.length; i++) {
            newArr.push(passwordArray[Math.floor(Math.random() * passwordArray.length)]);
          };
        }
      }
    }

    else if (symbolChecked) {
      passwordArray = [];
      passwordArray = passwordArray.concat(symbols);

      for (let i = 0; i < 1000; i++) {
        if (symbolChecked && newArr.some(arr => arr.match(symbolsMatching))) {
          break;
        } else {
          newArr = []
          for (let i = 0; i < this.state.length; i++) {
            newArr.push(passwordArray[Math.floor(Math.random() * passwordArray.length)]);
          };
        }
      }
    }

    else if (numberChecked) {
      passwordArray = [];
      passwordArray = passwordArray.concat(numbers);

      for (let i = 0; i < 1000; i++) {
        if (numberChecked && newArr.some(num => parseInt(num))) {
          break;
        } else {
          newArr = []
          for (let i = 0; i < this.state.length; i++) {
            newArr.push(passwordArray[Math.floor(Math.random() * passwordArray.length)]);
          };
        }
      }
    } else {
      this.setState({ check: true });
      setTimeout(() => {
        this.setState({ check: false })
      }, 1000)
    }

    //პაროლის შენახვა
    this.setState({ password: newArr.join('') })

    passHistArray.push(this.state.password);
    localStorage.setItem('pasGenGot', JSON.stringify(passHistArray))
  }
  //სიგრძის შენახვა
  faceIutput(num) {
    this.setState({ length: num.target.value })
  }



  //დაკოპირება
  copy() {
    if (this.state.password) {
      let pass = document.getElementById('password');
      pass.select();
      pass.setSelectionRange(0, 99999)
      document.execCommand("copy");
      this.setState({ copied: true })
      setTimeout(() => {
        this.setState({ copied: false })
      }, 1000)
    }
  }

  //რეინჯის განსაზღვრა
  range(r) {
    let target = r.target;
    let min = target.min;
    let max = target.max;
    let val = target.value;
    target.style.backgroundSize = (val - min) * 100 / (max - min) + '% 100%'
  }
  //მომდევნო გვერდზე გადასვლა
  changeFace() {
    this.props.appear(true);
  }

  //ისტორიაზე გადასვლა
  changeFaceH(){
    this.props.appearH(true);
  }

  render() {
    return (
      <div className='generatorCard'>

        <div className='row mb-3'>
          <div className='col-12'>
            <h1 className='title'>Password Generator</h1>
          </div>
        </div>

        <div className='col-12'>
          <div className='passwordBoard'>
            {this.state.copied && <h2 className='copiedLocation'>Copied!</h2>}
            <input type='text' readOnly defaultValue={this.state.password} id='password' className='passwordLocation' />
            {!this.state.copied && <div><i onClick={this.copy} className="far fa-copy fa-2x"></i></div>}
          </div>
        </div>

        <div className='col-12 length'>
          <p>LENGTH: <span>{this.state.length}</span></p>
        </div>

        <div className='col-12 rangeBox'>
          <span>4</span>
          <div className='rangeSpot'>
            <input onInput={this.range} onChange={this.faceIutput} min='4' max='32' defaultValue='4' step='1' type="range" />
          </div>
          <span>32</span>
        </div>

        <div className='col-12'>
          <div className='row settings'>
            <p>SETTINGS</p>
          </div>
          <div className='row flex'>
            <label htmlFor='uppercase'>Include Uppercase</label>
            <input className='toggle' id='uppercase' name='uppercase' type='checkbox' />
          </div>
          <div className='row flex margin'>
            <label htmlFor='lowercase'>Include Lowercase</label>
            <input className='toggle' id='lowercase' name='lowercase' type='checkbox' />
          </div>
          <div className='row flex margin'>
            <label htmlFor='number'>Include Numbers</label>
            <input className='toggle' id='number' name='number' type='checkbox' />
          </div>
          <div className='row flex margin'>
            <label htmlFor='symbols'>Include Symbols</label>
            <input className='toggle' id='symbols' name='symbols' type='checkbox' />
          </div>
        </div>

        <div className='col-12 buttonBox'>
          {!this.state.check && 
          <div className='buttonBox1'>
          <button className='btnMy' onClick={this.generatePassword}> Generate Password</button>
          <button onClick={this.changeFaceH} title='Generated Passwords History' className='history'><i className="fas fa-history"></i></button>
          </div>
          }
          {this.state.check && <button className='btnMy2'><i className="fas fa-exclamation-triangle check"> Choose Type</i></button>}
        </div>
        <div className='row or'>
            <p>OR</p>
          </div>
      
          <div className='changeFace'>
            <button onClick={this.changeFace}>Check Your Password</button>
          </div>
      </div>
    )
  }
}

export default App;