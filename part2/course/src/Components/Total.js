const Total = ({ parts }) => {
  const total = parts.reduce((previous, current) => {
      return previous + current.exercises;
    }, 0);
  return (
    <div>
      <p>
        <strong>
          The sum of all exercices is: {total}
        </strong>
      </p>
    </div>
  );
};

export default Total;