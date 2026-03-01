

function Statistic({Results}) {
     if (!Results || Results.length === 0) return null;
  const scores = Results.map(result => result.score);
  const average = (scores.reduce((a, b) => a + b, 0) / scores.length).toFixed(2);
  const min = Math.min(...scores);
  const max = Math.max(...scores);
  
  return (

     <div className="stats-row">

      <div className="stat-item">
        <span className="label">Average</span>
        <span className="value">{average}</span>
      </div>

      <div className="stat-item">
        <span className="label">Min</span>
        <span className="value">{min}</span>
      </div>
      
      <div className="stat-item">
        <span className="label">Max</span>
        <span className="value">{max}</span>
      </div>

    </div>
  );
}

export default Statistic;
