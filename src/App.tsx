import './App.css'
import {Container, Row} from "react-bootstrap";
import CardDefault from "./components/card.tsx";
import TableDefault from "./components/table.tsx";
import SearchInput from "./components/search.tsx";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <Container className='mainContent'>
      <Row className='cardContent'>
        <SearchInput />
        <h3>DASHBOARD</h3>
        <div>
          <CardDefault/>
        </div>
        <div>
          <CardDefault/>
          <CardDefault/>
        </div>
        <h3>AVISOS/LEMBRETES</h3>
        <div className='tableContent'>
          <TableDefault />
        </div>
      </Row>
      <Row className='calendarContent'>
        <div>
          <CardDefault/>
          <CardDefault/>
          <CardDefault/>
        </div>
      </Row>
    </Container>
  )
}

export default App
