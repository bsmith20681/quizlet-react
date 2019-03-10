import React, { Component } from 'react'



class Flashcard extends Component {

  constructor(props){
    super(props)
    this.state = {
      isFlipped: false
    }
  }

  handleToggle(e){
    e.preventDefault();
    this.setState({
      isFlipped: !this.state.isFlipped
    })
  }



  render() {
    let {isFlipped} = this.state;
    return (
    <div className="row">
      <div className="col-lg-12 d-flex justify-content-center">
        <div className={`flashcard ${isFlipped ? 'flip' : ''}`} onClick={(e) => this.handleToggle(e)}>
          <div className="flashcard__side flashcard__side--front">
              <h1 id="flashcard__front" className="text-center m-3"> front</h1>
            </div>
          <div className="flashcard__side flashcard__side--back">
            <h1 id="flashcard__back" className="text-center m-3">back</h1>
          </div>
        </div>
      </div>
    </div>
    );
  }
}

export default Flashcard;
