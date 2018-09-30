import React from 'react';
import { Col, Container, Row, Footer } from 'mdbreact';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

class FooterPage extends React.Component {
    render(){
        return(
            <Footer color="#2c3142" className="page-footer font-small pt-4 mt-4">
                <Container fluid className="text-center text-md-left">
                    <Row>
                    <Col md="8" >
                        <h5 className="text-uppercase mb-4 mt-3 font-weight-bold">A propos</h5>
                        <p style={{textAlign: 'justify'}}>Ce site web a été réalisé lors d'un hackathon à Chicoutimi et est voué à améliorer le
                          partage de la culture au Saguenay Lac-Saint-Jean par la mise en relation des artistes.
                          Les membres du groupe Mathieu, Maxence, Simon et Tanguy sommes ouverts à toute suggestion
                          d'amélioration de la plateforme. Vous pouvez nous contacter par mail ou par
                          message sur les réseaux sociaux listés çi-dessous.</p>
                    </Col>
                    <hr className="clearfix w-100 d-md-none"/>
                    <Col md="2" style={{textAlign: 'left'}}>
                        <h5 className="text-uppercase mb-4 mt-3 font-weight-bold">Nous contacter</h5>
                        <ul className="list-unstyled">
                            <li><a href="#!"><a style={{fontWeight: 'bold'}} href="eurekart@suggestions.com">eurekart@suggestions.com</a></a></li>
                        </ul>
                    </Col>
                    </Row>
                </Container>
                <div className="text-center">
                    <ul className="list-unstyled list-inline">
                        <li className="list-inline-item"><a className="btn-floating btn-sm btn-fb mx-1"><i className="fa fa-facebook"> </i></a></li>
                        <li className="list-inline-item"><a className="btn-floating btn-sm btn-tw mx-1"><i className="fa fa-twitter"> </i></a></li>
                        <li className="list-inline-item"><a className="btn-floating btn-sm btn-gplus mx-1"><i className="fa fa-google-plus"> </i></a></li>
                        <li className="list-inline-item"><a className="btn-floating btn-sm btn-li mx-1"><i className="fa fa-linkedin"> </i></a></li>
                        <li className="list-inline-item"><a className="btn-floating btn-sm btn-dribbble mx-1"><i className="fa fa-dribbble"> </i></a></li>
                    </ul>
                </div>
                <div className="footer-copyright text-center py-3">
                    <Container fluid>
                        &copy; {(new Date().getFullYear())} Copyrights: MDBootstrap, Licence : Attribution 3.0 non transposé (CC BY 3.0)
                    </Container>
                </div>
            </Footer>
        );
    }
}

export default FooterPage;
