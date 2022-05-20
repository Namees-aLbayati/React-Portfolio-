import React, { useState } from 'react'
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';

import { Nav, NavDropdown, Container, Navbar, Card, Modal } from 'react-bootstrap';
import Typed from 'react-typed'
import { setContext } from '@apollo/client/link/context'
import About from './component/about';
import Education from './component/Education'
import Projects from './component/Projects'
import 'bootstrap/dist/css/bootstrap.min.css';
import Contact from './component/contact'
import Footer from './component/footer'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Mymodal from './component/modal';
import Comment from './component/comment';

const httpLink = createHttpLink({
  uri: "/graphql"
})

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});




function App() {
  const [settry,usesettry]=useState(true)


  const [showSkills, setSkills] = useState(false)
  const [showProject, setProject] = useState(false)
  const [showContact, setContact] = useState(false)
  function fun() {
    setSkills(!showSkills)
    if (setProject) {
      setProject(false)
      return
    }
  }
  function fun2() {
    setProject(!showProject)
    if (setSkills) {
      setSkills(false)
      return
    }
  }
  function fun3() {
    setContact(!showContact)
    if (setProject && setSkills) {
      setProject(false)
      setSkills(false)
      return
    }
  }

  return (
    <ApolloProvider client={client}>
      <Router>
        <Navbar bg="light" expand="lg">
          <Container >
            <Navbar.Brand ><Link to='/'>  Namees Mohammed </Link></Navbar.Brand>


            <Navbar.Collapse id="basic-navbar-nav" class='mx-5 p-2 '>
              <Nav >

                <NavDropdown title="Page Sections" id="basic-nav-dropdown">
                  <NavDropdown.Item>
                    <Link to='/skills'>
                      Skills
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item  >
                    <Link to='/projects'>
                      Projects</Link>
                  </NavDropdown.Item>


                  <NavDropdown.Divider />
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>




        <div class='text-light'>



          <Routes>
            <Route path='/' element={<About />} />


            <Route path='/skills' element={<Education />} />




            <Route path='/projects' element={<Projects />} />

           

            <Route path='/projects/:projectId' element ={<Mymodal settry={settry}/>} />
          </Routes>

          <Contact />

          <Footer />
        </div>

      </Router>
    </ApolloProvider>
  );
}

export default App;
