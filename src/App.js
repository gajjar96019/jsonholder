import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function App() {

  const [val, setval] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => setval(data))
  }, [])


  return (
    <div className="">
      <Container fluid>
        <Row>
          {
            val.map((item) => {
              return (
                <Col lg='6' className='g-3'>
                  <div className='d-flex border shadow'>
                    <img src={require(`./images/1.jpg`)} width={200} />
                    <div className=''>
                      <p>{item.id}</p>
                      <p>{item.title}</p>
                      <p>{item.body}</p>
                    </div>
                  </div>
                </Col >
              )
            })
          }
        </Row>
      </Container>
    </div>
  );
}

export default App;
