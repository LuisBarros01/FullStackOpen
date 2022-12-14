import Part from "./Part";

const Content = ({ parts }) => {
  return (
    <div>
      {parts.map((item) => 
        <Part key={item.id} part={item.name} exercise={item.exercises} />
      )}
    </div>
  );
};

export default Content;