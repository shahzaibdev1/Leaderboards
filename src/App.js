import "./App.css";
import Student from "./Student";

function App() {
  return (
    <div className="App">
      <h1>Leaders Board</h1>
      <Student studentName="Shahzaib" college="Concordia College" score="350" />
      <Student studentName="Shahzaib" college="Concordia College" score={340} />
      <Student studentName="Shahzaib" college="Concordia College" score={320} />
      <Student studentName="Shahzaib" college="Concordia College" score={342} />
      <Student studentName="Shahzaib" college="Concordia College" score={349} />
    </div>
  );
}

export default App;
