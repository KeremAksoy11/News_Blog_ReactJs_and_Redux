import React from "react";
import NewsList from "./newsList";
import BusinessList from "./businessList";
import EnterList from './enterList';
import HealthList from './healthList';
import ScienceList from './scienceList';
import SportsList from './sportsList';
import TechnoList from './technoList';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import OtherİnfoList from "./otherİnfoList";
import RecordedList from './recordedNews'



const App = () => {
  return (

    <div className="container-fluid bg-light">
      <div className="row" >
        <Router>
          <nav className="navbar navbar-expand-lg navbar-dark p-3 bg-danger" id="headerNav">
            <div className="container-fluid">
              <a className="navbar-brand d-block d-lg-none" href="!#">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Ka_Logo-Black.svg/107px-Ka_Logo-Black.svg.png?20171107213715" width="60" height={54} alt="KA LOGO" className="d-inline-block align-middle mr-3" />
              </a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>

              <div className=" collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav mx-auto ">
                  <li className="nav-item">
                    <a className="nav-link mx-2 active" aria-current="page" href="!#">Home</a>
                  </li>
                  <li className="nav-item">
                  <Link className="nav-link text-white" as={Link} to={"/recordedNews"}>Recorded News</Link>
                  </li>
                  <li className="nav-item d-none d-lg-block">
                    <a className="nav-link mx-2" href="!#">
                    <Link className="nav-link text-white " aria-current="page" as={Link} to={"/"}><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Ka_Logo-Black.svg/107px-Ka_Logo-Black.svg.png?20171107213715" width="60" height={60} alt="KA LOGO" className="d-inline-block align-middle mr-3" /></Link>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link mx-2" href="!#"> Login </a>
                  </li>
                  <li className="nav-item dropdown">
                    <a className="nav-link mx-2 dropdown-toggle" href="!#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Contact
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                      <li><a className="dropdown-item nav-link text-dark" href="https://github.com/KeremAksoy11?tab=repositories" target="_blank" rel='noreferrer'>GitHub</a> </li>
                      <li><a className="dropdown-item nav-link text-dark" href="https://wa.me/905380644100?text=Merhaba%20Kerem%20Bey" target="_blank" rel='noreferrer'>WhatsApp</a> </li>
                      <li><a className="dropdown-item nav-link text-dark" href="mailto:keremaksoy1127@gmail.com" target="_blank" rel='noreferrer' >Mail</a> </li>
                    </ul>
                  </li>
                </ul>
              </div>

            </div>
      

          </nav>
      

          <ul className="nav nav-tabs nav-pills justify-content-center bg-primary">

            <li className="nav-item ">
              <Link className="nav-link text-white " aria-current="page" as={Link} to={"/"}>General</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white " as={Link} to={"/business"} >Business</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" as={Link} to={"/entertainment"}>Entertainment</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" as={Link} to={"/health"}>Health</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" as={Link} to={"/science"}>Science</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" as={Link} to={"/sports"}>Sports</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" as={Link} to={"/technology"}>Technology</Link>
            </li>
          </ul>
          <hr></hr>
          <div>
          <OtherİnfoList/>
          <hr/>
        </div>
          <div>
            <Switch>
              <Route path = "/recordedNews">
                <RecordedList/>
              </Route>
              <Route path="/business">
                <BusinessList />
              </Route>
              <Route path="/entertainment">
                <EnterList />
              </Route>
              <Route path="/health">
                <HealthList />
              </Route>
              <Route path="/science">
                <ScienceList />
              </Route>
              <Route path="/sports">
                <SportsList />
              </Route>
              <Route path="/technology">
                <TechnoList />
              </Route>
              <Route path="/">
                <NewsList />
              </Route>
            </Switch>
          </div>
        </Router>

        
      


        <nav className="navbar navbar-expand-lg navbar-dark p-3 bg-danger" id="headerNav">
          <div className="container-fluid">
            <a className="navbar-brand d-block d-lg-none" href="!#">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Ka_Logo-Black.svg/107px-Ka_Logo-Black.svg.png?20171107213715" width="60" height={54} alt="KA LOGO" className="d-inline-block align-middle mr-3" />
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>


            <div className=" collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav mx-auto ">
                <li className="nav-item">
                  <a className="nav-link mx-2 active" aria-current="page" href="!#"></a>
                </li>
                <li className="nav-item d-none d-lg-block">
                  <a className="nav-link mx-2" href="!#">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Ka_Logo-Black.svg/107px-Ka_Logo-Black.svg.png?20171107213715" width="60" height={60} alt="KA LOGO" className="d-inline-block align-middle mr-3" />
                  </a>
                </li>
              </ul>
           
              <div className="dropup">
              <ul className="mx-auto ">
                <button className="dropbtn bg-danger text-center">Contact</button>
                <div className="dropup-content">
                  <a className="dropdown-item nav-link text-dark" href="https://github.com/KeremAksoy11?tab=repositories" target="_blank" rel='noreferrer'>GitHub</a>
                  <a className="dropdown-item nav-link text-dark" href="https://wa.me/XXXXXXXXXXX?text=Hello%20MR.%20Kerem" target="_blank" rel='noreferrer'>WhatsApp</a>
                  <a className="dropdown-item nav-link text-dark" href="mailto:keremaksoy1127@gmail.com" target="_blank" rel='noreferrer' >Mail</a>
                </div>
                </ul>
              </div>
          
            </div>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default App;