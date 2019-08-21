import React from 'react';
import './App.css';
import {Switch ,Route,Link} from 'react-router-dom' ;
import {routes} from './route' ;
import ReactTooltip from 'react-tooltip';

/**
* git expemples repository :  
* <https://github.com/FortAwesome/react-fontawesome/blob/master/examples/create-react-app/src/App.js#L63>
* Font icons (svg) react lib
*/

import { library } from '@fortawesome/fontawesome-svg-core' ;
import { fas } from '@fortawesome/free-solid-svg-icons' ;
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add( fas ) ;

export default class App extends React.Component {
  
  state = {

    cookieUse: sessionStorage.getItem('useCookie') || false

  } ;

  constructor( props ) {

    super( props ) ;

    this.onUseCookie = this.onUseCookie.bind( this ) ;
    this.onScroll = this.onScroll.bind( this ) ;
  }

  /**
   * @bindMethod [constructor]
   * @param {SyntheticEvent} e
   */
  onScroll({pageY}) {

      const 
        headers = {
          static: this.refs.headerStatic ,
          fixed: this.refs.headerFixed
        }
      ;

      if( !headers.static || !headers.fixed ) return ;

      if( pageY >= headers.static.offsetHeight*2 ) {
        headers.fixed.classList.add('fixed-header-visible') ;
      } else if( pageY <= 0 ) {
        headers.fixed.classList.remove('fixed-header-visible') ;
      }
  }

  /**
   * @bindMethod [constructor]
   * @param {SyntheticEvent} e
   */
  onUseCookie(e) {

    e.preventDefault() ;
    sessionStorage.setItem('useCookie' , true ) ;

    this.setState( { cookieUse: true } ) ;
  }

  componentDidMount() {

    window.addEventListener('scroll' , this.onScroll ) ;
  }

  render() {

    return (
        <>
          <ReactTooltip type="light" />
           <header ref="headerStatic">
              <nav>
                <ul>
                  <li><Link to="/">home</Link></li>
                  <li><Link to="/about">about</Link></li>
                  <li><Link to="/factory">factory</Link></li>
                </ul>
              </nav>
          </header>

          <header className="header-fixed" ref="headerFixed">
              <nav>
                <ul>
                  <li><Link to="/">home</Link></li>
                  <li><Link to="/about">about</Link></li>
                  <li><Link to="/factory">factory</Link></li>
                </ul>
              </nav>
          </header>

          {
            !this.state.cookieUse &&
            <section id="cookie-use">
              <div>
                <FontAwesomeIcon 
                  icon={['fas','times']}
                  size="2x"
                  style={{color:'#fff', cursor: 'pointer'}}
                  onClick={this.onUseCookie}
                />
              </div>

              <div>
                <p>
                  Nous utilisons des cookies pour vous garantir la meilleure expérience sur notre application.<br />
                  <Link to="#" data-tip="factory link">Cliquez ici</Link> pour plus d'informations.
                </p>
              </div>
            </section>
          }

          {/* wrap animated */} 
          <div id="wrap-animated">
            
            <h1>Senzu Factory Template</h1>
              <div className="gone-animated" id="left-animated">
                <div className="circle" id="left-cirle"></div>
              </div>
              
              <div className="gone-animated" id="right-animated">
                <div className="circle" id="right-circle"></div>
              </div>

          </div>

          <Switch>
            {
              routes.map( ( route, key ) => (
                <Route
                  key={key}
                  exact={route.exact}
                  path={route.path}
                  component={route.render}
                />
              ) )
            }
          </Switch>
        </>
    ) ;

  }

}
