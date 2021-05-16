import React, { Component } from 'react';
import './Quiz.css'

class Quiz extends Component {
    render() {
        return (
            <div className="contain">

             <div className="question">
                  <div>Question</div>
                  <pre><span>  4 of 15</span> &nbsp; Who is the first President of India?</pre>
              </div>

              <div className="answer">
                  <button>Dr.APJ.Abdul Kalam</button>
                  <button>Dr.Rajendra Prasad</button>
                  <button>Dr.Jawaharlal Nehru</button>
                  <button>Dr.Manmohan Singh</button>
              </div>

              <div className="buttons">
                  <button>Previous</button>
                  <button>Next</button>
                  <button>Quit</button>
              </div>
           </div>
        );
    }
}

export default Quiz;

