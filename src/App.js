import React, { Component } from 'react';
import Statistics from './components/Statistics/Statistics';
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions';
import Section from './components/Section/Section';
import Notification from './components/Notification/Notification';

class App extends Component {
  static defaultProps = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  state = {
    good: this.props.good,
    neutral: this.props.neutral,
    bad: this.props.bad,
  };

  handleBtnClick = type => {
    this.setState(prevState => {
      return { [type]: prevState[type] + 1 };
    });
  };

  countTotalFeedback() {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  }

  countPositiveFeedbackPercentage(good, total) {
    let positiveFeedbackPercentage = 0;

    if (good) {
      positiveFeedbackPercentage = Math.round((good * 100) / total);
    }
    return positiveFeedbackPercentage;
  }

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positiveFeedbackPercentage = this.countPositiveFeedbackPercentage;
    return (
      <>
        <Section title={'Please leave feedback'}>
          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            onCountFeedback={this.handleBtnClick}
          />
        </Section>
        <Section title={'Statistics'}>
          {total ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positiveFeedbackPercentage(good, total)}
            />
          ) : (
            <Notification message="No feedback given" />
          )}
        </Section>
        )
      </>
    );
  }
}

export default App;
