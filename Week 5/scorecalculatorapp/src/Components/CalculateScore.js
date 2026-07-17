import "./mystyle.css";

function CalculateScore() {
  const name = "Sneha Kumari";
  const school = "Cognizant Academy";
  const total = 500;
  const scored = 450;
  const percentage = (scored / total) * 100;

  return (
    <div className="container">
      <h1>Student Score Calculator</h1>

      <p><strong>Name:</strong> {name}</p>
      <p><strong>School:</strong> {school}</p>
      <p><strong>Total Marks:</strong> {total}</p>
      <p><strong>Marks Obtained:</strong> {scored}</p>
      <p><strong>Percentage:</strong> {percentage}%</p>
    </div>
  );
}

export default CalculateScore;