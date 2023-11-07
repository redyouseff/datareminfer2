import {Button, Col, Collapse, Container, Row} from"react-bootstrap"
const Action=({delet,view})=>{
    return(
        <div>
            <Container>
        <Row>
         <Col className="submit ">
         <Button onClick={delet} className="b1">مسح الكل</Button>
         <Button onClick={view} className="b2">عرض البيانات</Button>
         </Col>
        
        </Row>
      </Container>
        </div>
    )
}
export default Action