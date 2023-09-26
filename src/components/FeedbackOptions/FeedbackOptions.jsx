export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      {options.map(name => (
        <button key={name} onClick={() => onLeaveFeedback(name)} type="button">
          {name}
        </button>
      ))}
    </>
  );
};
