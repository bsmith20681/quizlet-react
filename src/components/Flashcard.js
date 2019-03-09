import React, { Component } from 'react'



class Flashcard extends Component {

  render() {
    return (
    <div className="row">
      <div className="col-lg-12 d-flex justify-content-center">
        <div className="flashcard">
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
