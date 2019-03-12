import React, { Component } from 'react'
class Input extends Component {

  state = {
    inputs: []
  }

  addInput(){
    this.setState({inputs: [...this.state.inputs, ""]})
  }

  render() {
    return (
      <div className="App">

      <div className="container mt-5">
        <div className="row input-box">
          <div className="col-lg-6 d-flex justify-content-center">
            <input typeName="text" placeholder="Enter Question Here..." className="form1 input"/>
          </div>
          <div className="col-lg-6 d-flex justify-content-center">
            <input type="text" placeholder="Enter Answer Here..." className="form2 input"/>
          </div>
        </div>
      </div>

      {
        this.state.inputs.map((input, index)=>{
          return (
            <div key={index}>
              <div className="container mt-5">
                <div className="row input-box">
                  <div className="col-lg-6 d-flex justify-content-center">
                    <input valeu={input} placeholder="Enter Question Here..." className="form1 input"/>
                  </div>
                  <div className="col-lg-6 d-flex justify-content-center">
                    <input value={input} placeholder="Enter Answer Here..." className="form2 input"/>
                  </div>
                </div>
              </div>
            </div>
          )
        })
      }



      <div className="container my-4">
        <div className="row">
          <div className="col-lg-12 text-center">
            <button className="btn btn-primary" onClick={(e)=>this.addInput(e)}>ADD A NEW INPUT</button>
          </div>
        </div>
      </div>



      </div>


    );
  }
}

export default Input;
