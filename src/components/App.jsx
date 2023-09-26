import { Component } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';
import { Statistics } from './Statistics/Statistics';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  // countTotalFeedback = () => {
  //   const { good, bad, neutral } = this.state;
  //   total = good + bad + neutral;
  //   return total;
  // };

  onLeaveFeedback = name => {
    this.setState(prev => ({ [name]: prev[name] + 1 }));
  };

  countTotalFeedback = () => {
    const { state } = this;
    let total = 0;
    const values = Object.values(state);
    for (const item of values) {
      total += item;
    }
    return total;
  };

  countPositiveFeedbackPercentage = () => {
    const {
      countTotalFeedback,
      state: { good },
    } = this;
    return Math.round((good / countTotalFeedback()) * 100) || 0;
  };

  render() {
    const {
      state: { good, neutral, bad },
      onLeaveFeedback,
      countTotalFeedback,
      countPositiveFeedbackPercentage,
    } = this;
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={onLeaveFeedback}
          />
        </Section>
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        </Section>
      </>
    );
  }
}
