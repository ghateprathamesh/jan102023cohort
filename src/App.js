import './App.css';
import DataTable from './DataTable' ;
import { Container} from 'reactstrap';



function App() {
  return (
    <div className="App">
 <Container fluid>
          <h1 className="display-3">WELCOME TO MY WYNSICO BOOTCAMP PAGE</h1>
          <p className="lead">My Name is Prathamesh Ghate and I am a Master's student  </p>
          <p className="lead"><a href="https://github.com/ghateprathamesh">Here</a> is my Github Link  </p>
          <p className="lead"><a href="http://simp.ly/p/gb7l74">Here</a> Here is Class Notes Link </p>
          <p className="lead"><a href="https://github.com/ghateprathamesh/front-end-homework">Here</a> Here is Homeworks Link </p>
          <p className="lead"><a href="https://docs.google.com/spreadsheets/d/1I75Kt78QSCRSAiF74yBttNyWVI4bq2ONsTWnN_ai9iA/edit?usp=sharing">Here</a> Main Google Spreadsheet </p>

     <DataTable />
     </Container>
    </div>
  );
}

export default App;
