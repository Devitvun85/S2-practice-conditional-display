import Statistic from "./static.jsx";
function Scores({ courseName, Results }) {
  return (
    <div className="scores-container">

      <div className="scores">
      
      <h1>{courseName} Scores</h1>
      <table >
          
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Score</th>
          </tr>
        </thead>

        <tbody>
          {Results.map((result, index) => (
            <tr key={index}>
              <td>{result.firstName}</td>
              <td>{result.lastName}</td>
              <td className={result.score < 50 ? "warning" : ""}>{result.score}</td>
            </tr>
          ))}
        </tbody>
        
      </table>
      <Statistic Results={Results} />

      </div>
   </div>
  );
}

export default Scores;
