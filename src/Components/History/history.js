import React from 'react';
import './history.css';

class History extends React.Component {
    constructor(props) {
        super(props);
        this.state = { copied: false };
        this.back = this.back.bind(this);
        this.copyPassword = this.copyPassword.bind(this);
    }
    //უკან გასვლა
    back() {
        this.props.appear3(false)
    }
    //დაკოპირება
    copyPassword(val) {
        let pass = val.target;
        pass.setSelectionRange(0, 99999)
        document.execCommand("copy");
        this.setState({ copied: true })
        setTimeout(() => {
            this.setState({ copied: false })
        }, 1000)
    }

    render() {
        let showUp = false;
        if (localStorage.getItem('pasGenGot')) {
            const genPasswordsFromHistory = JSON.parse(localStorage.getItem('pasGenGot'));
            const lastPassArray = genPasswordsFromHistory.filter(filt => filt !== '')
            showUp = lastPassArray.map(n =>
                <li key={'pas_' + n}>
                    <input readOnly defaultValue={n} onClick={this.copyPassword} />
                </li>
            )
        }
        return (
            <div className='generatorCard'>
                <h2 className='titleH'>History</h2>
                {showUp &&  <h5 className='titleHs'>Press and copy</h5>}
                <ul className='ulList'>
                    {showUp}
                </ul>
                <div className='changeFace'>
                    <button onClick={this.back}><i className="fas fa-arrow-left fa-lg"></i></button>
                </div>
            </div>
        )
    }
}

export default History;
