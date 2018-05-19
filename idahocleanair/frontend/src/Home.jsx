import React from 'react';
import { Container, Row} from 'reactstrap';

export default class Home extends React.Component {
    render (){
        return(
            <div>

                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <Container>
                    <Row className='Rowone'>Our goal  is to provide high quality air
                        duct cleaning and dryer vent cleaning at a reasonable cost.</Row>
                    <Row lassName='Rowtwo'><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:
                    ANd9GcQpRgMPeKRrPb1tKXGTtg52EnLfcZaFa0EAWTjKIk8W8YRaWAb2'/></Row>
                </Container>

            </div>

        )

        ;

    }
}