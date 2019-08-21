import React from 'react';

/**
* git expemples repository :  
* <https://github.com/FortAwesome/react-fontawesome/blob/master/examples/create-react-app/src/App.js#L63>
* Font icons (svg) react lib
*/

import { library } from '@fortawesome/fontawesome-svg-core' ;
import { fas } from '@fortawesome/free-solid-svg-icons' ;
import { far } from '@fortawesome/free-regular-svg-icons' ;
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Rank.css' ;
library.add( fas , far ) ;

const
    STAR_OUTLINE = ['far','star'] ,
    STAR_MIDDLE = ['fas','star-half-alt'] ,
    STAR_ALL = ['fas','star'] ,
    NOTE2STATUS = status => {

        if( !(status instanceof Array) ) return ;

        if( status[0] === 'far' ) return 0 ;

        else
            return status[1] === 'star' ? 1 : .5 ;
    } 
;

export default class Rank extends React.Component {

    state = {
        stars: Array.from( Array(5).keys() ).map( () => STAR_OUTLINE )
    }

    constructor(props) {

        super( props ) ;

        this.onStarChange = this.onStarChange.bind( this ) ;
        this.onValidateNote = this.onValidateNote.bind( this ) ;
        this.onRankOut = this.onRankOut.bind( this ) ;
    }

    
    /**
     * @bindMethod [constructor]
     * @param {SyntheticEvent} e 
     */
    onRankOut( e ) {

    }

    /**
     * @bindMethod [constructor]
     * @param {SyntheticEvent} e 
     */
    onValidateNote( e ) {

        let
            li = e.target.parentNode ,
            secure = 0
        ;

        while( li.nodeName.toLocaleLowerCase() !== 'li' ) {

            li = li.parentNode ;

            if( ++secure >= 50 )
                break ;
        }

        if( li.nodeName.toLocaleLowerCase() !== 'li' ) return ;

        const currentKey = parseInt( li.getAttribute('data-key') ) ;
        
        if( isNaN( currentKey ) ) return ;

        const note = parseInt( currentKey ) + NOTE2STATUS(this.state.stars[ currentKey ]) ;

        
        const section = li.parentNode.parentNode;
        
        setTimeout(() => {
            section.querySelector( '.rank-text' ).textContent = note + ' / 5' ;
        }, 425);
        
        li.parentNode.classList.add('o-hide') ;
        
    }

    /**
     * @bindMethod [constructor]
     * @param {SyntheticEvent} e 
     */
    onStarChange( e ) {

        const posX = e.clientX || e.pageX ;
        
        const currentKey = parseInt( e.target.parentNode.getAttribute( 'data-key' ) ) ;
        
        if( !posX || ( (!currentKey && currentKey !== 0 ) || isNaN( currentKey ) ) ) return ;
        
        let value = STAR_ALL ;

        if( posX < (e.target.parentNode.offsetLeft + e.target.parentNode.offsetWidth / 3) ) { // show middle ;
            value = STAR_MIDDLE ;
        }

        
        const newStars = this.state.stars.map( (current,key) => {
            
            if( currentKey > key ) {
                return STAR_ALL ;

            } else if( currentKey < key ) {
                
                return STAR_OUTLINE ;
            }

            return key === currentKey ? value : current
         
        } ) ;

        this.setState({stars: newStars })

    }

    render() {

        return (
            <section
                className="Rank"
                onMouseOut={this.onRankOut}
            >
                <ul>
                    {
                        Array.from( Array(5).keys() ).map( key => (
                            <li
                                onClick={this.onValidateNote}
                                onMouseMove={this.onStarChange}
                                data-key={key}
                                key={key}
                            >
                                <FontAwesomeIcon
                                    key={key}
                                    icon={ this.state.stars[ key ] }
                                    size="2x"
                                    style={{color:"goldenrod"}}
                                />
                            </li>
                        ) )
                    }
                </ul>
                <span className="rank-text"></span>
            </section>
        ) ; 
    }
};
