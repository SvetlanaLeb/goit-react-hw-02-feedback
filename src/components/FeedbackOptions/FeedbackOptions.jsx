import s from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onCountFeedback }) => (
  <div className={s.wrapper}>
    {options.map(type => (
      <div>
        <button
          key={type.toString()}
          type="button"
          className={`${s.button} ${s[type]}`}
          onClick={() => onCountFeedback(type)}
        >
          {type}
        </button>
      </div>
    ))}
  </div>
);

export default FeedbackOptions;
