import { Children, Component } from "react";

        let total = 0;
export class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleClickGood = () => {
    this.setState(prev => ({ good: prev.good + 1 }));
  };
  handleClickNeutral = () => {
    this.setState(prev => ({ neutral: prev.neutral + 1 }));
  };
  handleClickBad = () => {
    this.setState(prev => ({ bad: prev.bad + 1 }));
  };
    countTotalFeedback = () => {
        const { good, bad, neutral } = this.state;
        total = good + bad + neutral;
        return total
    }
  render() {
    return (
      <>
        <h2>Please leave feedback</h2>
        <button onClick={this.handleClickGood} type="button">
          Good
        </button>
        <button onClick={this.handleClickNeutral} type="button">
          Neutral
        </button>
        <button onClick={this.handleClickBad} type="button">
          Bad
        </button>
        <div>
          <h3>Statistics</h3>
          <p>Good: {this.state.good}</p>
          <p>Neutral: {this.state.neutral}</p>
          <p>Bad: {this.state.bad}</p>
          <p>Total: {total}</p>
          <p></p>
        </div>
      </>
    );
  }
}