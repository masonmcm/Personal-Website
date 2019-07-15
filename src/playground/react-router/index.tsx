import * as React from "react";
import ReactDOM from "react-dom";

import Contact from "./contact";
import {
  Route,
  NavLink,
  BrowserRouter, 
  Switch
  } from "react-router-dom";

  import {
    TransitionGroup, 
    CSSTransition
  } from "react-transition-group";

let main = () => {
  ReactDOM.render(
    <Nav />,
    document.getElementById("root")
  );
};

class Nav extends React.Component {
  render() {
    return (
      <BrowserRouter>
      <Route render={({location}) => (
      <div>
        <h1>React Router Simple Starter</h1>
            <ul className="header">
              <li><NavLink exact to="/">Home</NavLink></li>
              <li><NavLink to="/Blog">Stuff</NavLink></li>
              <li><NavLink to="/Contact">Contact</NavLink></li>
            </ul>
       <div className="content">
         <TransitionGroup>
           <CSSTransition
              key={location.key}
              timeout={1000}
              classNames='fade'>
              <Switch location={location}>
                <Route exact path="/" component={Home} />
                <Route path="/blog" component={Blog} />
                <Route path="/contact" component={Contact} />
              </Switch>
          </CSSTransition>
        </TransitionGroup>
       </div>
      </div>
      )}></Route>
      </BrowserRouter>
    );
  }
}

class Home extends React.Component {
  render() {
    return (
      <div>
        <h2>HELLO</h2>
        <p>
          Cras facilisis urna ornare ex volutpat, et
        convallis erat elementum. Ut aliquam, ipsum vitae
        gravida suscipit, metus dui bibendum est, eget rhoncus nibh
        metus nec massa. Maecenas hendrerit laoreet augue
        nec molestie. Cum sociis natoque penatibus et magnis
        dis parturient montes, nascetur ridiculus mus.
        </p>
        <p>
         Duis a turpis sed lacus dapibus elementum sed eu lectus.
        </p>
      </div>
    );
  }
}

class Blog extends React.Component {
  render() {
    return (
      <div>
        <h2>A Blog Post</h2>
        <p>
        Lorem ipsum dolor sit amet, duo vidit ullamcorper eu, mollis utroque vis ne, 
        fugit nominavi scripserit ex vim. Assum quaerendum delicatissimi vix id, nobis iisque vim ad, 
        commodo consetetur incorrupte et quo. No per magna inermis neglegentur, ius elit accusata maluisset 
        an, quo posse viris an. Sed ad fabulas utroque repudiandae, eu sit pertinax delicata, postulant efficiantur 
        vis cu. Id cum commodo definitiones.
        </p>
        <p>
        Civibus ponderum cu eum, ut mel errem tamquam intellegam, ea eos dico enim. Ne stet conclusionemque cum. 
        Per solum essent recteque eu. Nulla blandit ei eos, adhuc fabulas cu vim.
        </p>
        <p>
        Id dicunt phaedrum sententiae pri. Per modo dico modus an, ex noster singulis eos, pro cu saepe elaboraret 
        vituperatoribus. Te sumo fuisset verterem sit, utinam volutpat te sit, ne ius euripidis percipitur. 
        Albucius repudiare nec an, an sanctus scaevola ullamcorper duo, et inimicus ocurreret vel. 
        Ne iriure timeam mel. Vim cu dico feugait.
        </p>
        <p>
        Nam inani percipitur no, ne vix omnesque repudiandae. Ius cu elit mediocritatem. 
        Te eum argumentum inciderint, omnis tempor intellegat vel in. 
        Rebum elaboraret eum ex.
        </p>
        <p>
        Cum ea quidam senserit splendide. Purto labore nec cu, nullam graeci te pro. 
        Ne sale soluta nec, magna rebum prompta ea eam. Quodsi impetus philosophia eos ad. 
        Cum diam iuvaret ea, per ne blandit pericula. Consul molestie vis cu, no soleat recteque sea. 
        Hinc vitae referrentur cum an, vel debet phaedrum ei.
        </p>
      </div>
    );
  }
}


window.addEventListener("load", main);