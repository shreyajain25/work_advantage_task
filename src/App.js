import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Row, Col, Container} from 'react-bootstrap';
import ImageComponent from './ImageComponent.js';

function App() {
  return (
    <div className="App">
      <Container>
        <Row>
          <Col><ImageComponent name="Barbeque Nation" rating="4.4" image="image1" /></Col>
          <Col><ImageComponent name="Fasoos" rating="4.6" image="image2" /></Col>
          <Col><ImageComponent name="Firangi Bake" rating="4.7" image="image3" /></Col>
          <Col><ImageComponent name="Good Bowl" rating="4.9" image="image4" /></Col>
        </Row>
        <Row>
          <Col><ImageComponent name="Mandrain Oak" rating="3.4" image="image5" /></Col>
          <Col><ImageComponent name="Sweet Truth" rating="3.6" image="image6" /></Col>
          <Col><ImageComponent name="Bankingo" rating="3.2" image="image7" /></Col>
          <Col><ImageComponent name="Roseta Hotel" rating="3.5" image="image8" /></Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
