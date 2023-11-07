import {Button, Col, Collapse, Container, Row} from"react-bootstrap"
const Content =({person})=>{
    return(
        <div>
            <Container className="times ">
        <Row>
          <Col sm="8">
            {person.length? person.map((item)=>{
              return (
                <Container>
                <Row>
                  <Col>
                 <img className="photo" src="download (4).jfif" alt=""/> 
                <p className="d-inline m-3 first" > {item.name} </p>
               
                <p className="second">{item.time} </p>
                  </Col>
                </Row>
                <hr></hr>
              </Container>
                 
              )

            }): <p>لا يوجد مواعيد</p>
            }
           
           
          </Col>
        </Row>

      </Container>
        </div>
    )
}
export default Content 