import React from 'react';
import './yourPass.css';

const symbolsMatching = /^[!@#$%^&*()_+\-=\]{};:~\\|,<>?]*$/;
const alphabetUpperMatching = /[A-Z]/g;
const alphabetLowerMatching = /[a-z]/;
const numberMatching = /[0-9]/;


class YourPass extends React.Component {
    constructor(props) {
        super(props);
        this.state = { emojy: '' };
        this.changeFace2 = this.changeFace2.bind(this);
        this.emojyGen = this.emojyGen.bind(this);
    }

    //ემოჯის გენერატორი
    emojyGen(inp) {
        let value = inp.target.value;
        let array = value.split('')

        //ქონდიშენების შემოწმება
        if (array.some(symbol => symbol.match(symbolsMatching)) && array.some(symbol => symbol.match(alphabetUpperMatching)) && array.some(symbol => symbol.match(alphabetLowerMatching)) && array.some(symbol => symbol.match(numberMatching)) && array.length >= 4) {
            this.setState({
                emojy:
                    <div>
                        <i className="far fa-kiss-wink-heart fa-3x green"><span className='emojyText'>Perfect</span></i>
                    </div>
            })
        } else if (array.some(symbol => symbol.match(symbolsMatching)) && array.some(symbol => symbol.match(alphabetUpperMatching)) && array.some(symbol => symbol.match(numberMatching)) && array.length >= 4) {
            this.setState({
                emojy:
                    <div>
                        <i className="far fa-grin-stars fa-3x moreGreen"><span className='emojyText'>Good</span></i>
                    </div>
            })
        } else if (array.some(symbol => symbol.match(symbolsMatching)) && array.some(symbol => symbol.match(alphabetLowerMatching)) && array.some(symbol => symbol.match(numberMatching)) && array.length >= 4) {
            this.setState({
                emojy:
                    <div>
                        <i className="far fa-grin-stars fa-3x moreGreen"><span className='emojyText'>Good</span></i>
                    </div>
            })
        } else if (array.some(symbol => symbol.match(alphabetUpperMatching)) && array.some(symbol => symbol.match(alphabetLowerMatching)) && array.some(symbol => symbol.match(numberMatching)) && array.length >= 4) {
            this.setState({
                emojy:
                    <div>
                        <i className="far fa-grin-stars fa-3x moreGreen"><span className='emojyText'>Good</span></i>
                    </div>
            })
        } else if (array.some(symbol => symbol.match(symbolsMatching)) && array.some(symbol => symbol.match(alphabetUpperMatching)) && array.some(symbol => symbol.match(alphabetLowerMatching)) && array.length >= 4) {
            this.setState({
                emojy:
                    <div>
                        <i className="far fa-grin-stars fa-3x moreGreen"><span className='emojyText'>Good</span></i>
                    </div>
            })
        } else if (array.some(symbol => symbol.match(numberMatching)) && array.some(symbol => symbol.match(symbolsMatching)) && array.length >= 4) {
            this.setState({
                emojy:
                    <div>
                        <i className="far fa-smile fa-3x lightGreen"><span className='emojyText'>Okay</span></i>
                    </div>
            })
        } else if (array.some(symbol => symbol.match(numberMatching)) && array.some(symbol => symbol.match(alphabetUpperMatching)) && array.length >= 4) {
            this.setState({
                emojy:
                    <div>
                        <i className="far fa-smile fa-3x lightGreen"><span className='emojyText'>Okay</span></i>
                    </div>
            })
        } else if (array.some(symbol => symbol.match(numberMatching)) && array.some(symbol => symbol.match(alphabetLowerMatching)) && array.length >= 4) {
            this.setState({
                emojy:
                    <div>
                        <i className="far fa-smile fa-3x lightGreen"><span className='emojyText'>Okay</span></i>
                    </div>
            })
        } else if (array.some(symbol => symbol.match(alphabetUpperMatching)) && array.some(symbol => symbol.match(alphabetLowerMatching)) && array.length >= 4) {
            this.setState({
                emojy:
                    <div>
                        <i className="far fa-smile fa-3x lightGreen"><span className='emojyText'>Okay</span></i>
                    </div>
            })
        } else if (array.some(symbol => symbol.match(alphabetUpperMatching)) && array.some(symbol => symbol.match(symbolsMatching)) && array.length >= 4) {
            this.setState({
                emojy:
                    <div>
                        <i className="far fa-smile fa-3x lightGreen"><span className='emojyText'>Okay</span></i>
                    </div>
            })
        } else if (array.some(symbol => symbol.match(symbolsMatching)) && array.some(symbol => symbol.match(alphabetLowerMatching)) && array.length >= 4) {
            this.setState({
                emojy:
                    <div>
                        <i className="far fa-smile fa-3x lightGreen"><span className='emojyText'>Okay</span></i>
                    </div>
            })
        } else if (array.some(symbol => symbol.match(symbolsMatching)) && array.length >= 4) {
            this.setState({
                emojy:
                    <div>
                        <i className="far fa-meh fa-3x yellow"><span className='emojyText'>So so</span></i>
                    </div>
            })
        } else if (array.some(symbol => symbol.match(numberMatching)) && array.length >= 4) {
            this.setState({
                emojy:
                    <div>
                        <i className="far fa-meh fa-3x yellow"><span className='emojyText'>So so</span></i>
                    </div>
            })
        } else if (array.some(symbol => symbol.match(alphabetLowerMatching)) && array.length >= 4) {
            this.setState({
                emojy:
                    <div>
                        <i className="far fa-meh fa-3x yellow"><span className='emojyText'>So so</span></i>
                    </div>
            })
        } else if (array.some(symbol => symbol.match(alphabetUpperMatching)) && array.length >= 4) {
            this.setState({
                emojy:
                    <div>
                        <i className="far fa-meh fa-3x yellow"><span className='emojyText'>So so</span></i>
                    </div>
            })
        } else if (array.length < 4 && array.length > 0) {
            this.setState({
                emojy:
                    <div>
                        <i className="far fa-frown fa-3x red"><span className='emojyText'>Bad</span></i>
                    </div>
            })
        } else {
            this.setState({
                emojy: ''
            })
        }
    }

    //წინა გვერდზე გადასვლა
    changeFace2() {
        this.props.appear2(false)
    }

    render() {
        let emojy = this.state.emojy
        return (
            <div className='generatorCard'>
                <h3 className='title2'>Password Control</h3>
                <input type='text' className='inputYourPass' onInput={this.emojyGen} />
                <div className='resultBox'>{emojy}</div>
                <div className='changeFace'>
                    <button onClick={this.changeFace2}><i className="fas fa-arrow-left fa-lg"></i></button>
                </div>
            </div>
        )
    }
}

export default YourPass;