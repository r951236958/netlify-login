import Head from 'next/head'
import React from 'react';
import ReactDOM from 'react-dom';
import App from '../src/App';
// import registerServiceWorker from './registerServiceWorker';
import netlifyIdentity from 'netlify-identity-widget';
//import { Container, Row, Card, Button } from 'react-bootstrap'

import Footer from './components/Footer'
import Nav from './components/Nav'
import Header from './components/Header'
import Typography from './components/Typography'
import GoToTop from './components/GoToTop'

//import useScript from '../src/useScript'
import Layout from './Layout'


window.netlifyIdentity = netlifyIdentity;
// You must run this once before trying to interact with the widget
netlifyIdentity.init();

ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();

//export default function Home() {

  //useScript('/dist/theme.js');

//  return (
//    <Layout />
    //<Container className="md-container">
    //  <Head>
    //    <title>ReactJS with react-bootstrap</title>
    //  </Head>
    //  <Container>
    //    <h1>
    //      Welcome to <a href="https://nextjs.org">Next.js!</a>
    //    </h1>
    //    <p>
    //      Get started by editing <code>pages/index.js</code>
    //    </p>
    //    <Container>
    //      <Row className="justify-content-md-between">
    //        <Card className="sml-card">
    //          <Card.Body>
    //            <Card.Title>Documentation</Card.Title>
    //            <Card.Text>
    //              Find in-depth information about Next.js features and API.
    //            </Card.Text>
    //            <Button variant="primary" href="https://nextjs.org/docs">
    //              More &rarr;
    //            </Button>
    //          </Card.Body>
    //        </Card>
    //        <Card className="sml-card">
    //          <Card.Body>
    //            <Card.Title>Learn</Card.Title>
    //            <Card.Text>
    //              Learn about Next.js in an interactive course with quizzes!
    //            </Card.Text>
    //            <Button variant="primary" href="https://nextjs.org/learn">
    //              More &rarr;
    //            </Button>
    //          </Card.Body>
    //        </Card>
    //      </Row>
    //      <Row className="justify-content-md-between">
    //        <Card className="sml-card">
    //          <Card.Body>
    //            <Card.Title>Examples</Card.Title>
    //            <Card.Text>
    //              Discover and deploy boilerplate example Next.js projects.
    //            </Card.Text>
    //            <Button
    //              variant="primary"
    //              href="https://github.com/vercel/next.js/tree/master/examples"
    //            >
    //              More &rarr;
    //            </Button>
    //          </Card.Body>
    //        </Card>
    //        <Card className="sml-card">
    //          <Card.Body>
    //            <Card.Title>Deploy</Card.Title>
    //            <Card.Text>
    //              Instantly deploy your Next.js site to a public URL with
    //              Vercel.
    //            </Card.Text>
    //            <Button
    //              variant="primary"
    //              href="https://vercel.com/import?filter=next.js&utm_source=github&utm_medium=example&utm_campaign=next-example"
    //            >
    //              More &rarr;
    //            </Button>
    //          </Card.Body>
    //        </Card>
    //      </Row>
    //    </Container>
    //  </Container>
    //  <Footer />
    //</Container>
//  )
//}
