import Header from './Header';
import Content from './Content';

const Course = ({ course, part }) => {
  return (
    <>
      <Header course={course} />
      <Content parts={part} />
    </>
  );
};

export default Course;