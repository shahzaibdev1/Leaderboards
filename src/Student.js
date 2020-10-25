import React, { Component } from "react";

class Student extends Component {
  constructor(props) {
    super(props);

    this.state = { score: 0, isSuccess: false };
  }

  componentDidMount() {
    this.setState({ score: Number(this.props.score) });
  }

  addScore = () => {
    this.setState({ score: this.state.score + 1 }, () => {
      // eslint-disable-next-line no-unused-expressions
      this.state.score >= 350 ? this.setState({ isSuccess: true }) : null;
    });
  };

  reduceScore = () => {
    this.setState({ score: this.state.score - 1 }, () => {
      // eslint-disable-next-line no-unused-expressions
      this.state.score <= 340 ? this.setState({ isSuccess: false }) : null;
    });
  };

  render() {
    const { isSuccess } = this.state;

    let msg = isSuccess ? "Success" : "failed";

    return (
      <div className="student">
        <div className="left">
          <h2 className="studentName">
            {this.props.studentName}
            <button className="btn btn-score" onClick={this.addScore}>
              +
            </button>
            <button className="btn btn-score" onClick={this.reduceScore}>
              -
            </button>
          </h2>
          <p className="college">
            {this.props.college}
            <span className={isSuccess ? "success-message" : "fail-message"}>
              {msg}
            </span>
          </p>
        </div>
        <div className="right">
          <h3 className="score">{this.state.score}</h3>
        </div>
      </div>
    );
  }
}

export default Student;
