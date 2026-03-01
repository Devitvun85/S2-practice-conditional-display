import Header from "./components/Header";
import Scores from "./components/Scores";
import { HTML_RESULTS } from "./data.js";
import { PYTHON_RESULTS } from "./data.js";
import { ENGLISH_RESULTS } from "./data.js";
import { JAVA_RESULTS } from "./data.js";
import Statistic from "./components/static.jsx";
function App() {
  return (
    <>
      <Header />
      <div className="scores-container">
        <Scores courseName="HTML" Results={HTML_RESULTS} />
        <Scores courseName="Python" Results={PYTHON_RESULTS} />
        <Scores courseName="English" Results={ENGLISH_RESULTS} />
        <Scores courseName="Java" Results={JAVA_RESULTS} />
      </div>
    <Statistic courseResults={[...HTML_RESULTS, ...PYTHON_RESULTS, ...ENGLISH_RESULTS, ...JAVA_RESULTS]}   />
    </>
  );
}

export default App;
