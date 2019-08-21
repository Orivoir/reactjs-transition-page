import React from 'react';
import DocumentTitle from 'react-document-title';
import './Home.css';

export default class Home extends React.Component {
    
    constructor( props ) {

        super( props ) ;

        this.onThumbnailActive = this.onThumbnailActive.bind( this ) ;
    }

    /**
     * @bindMethod [constructor]
     * @param {SyntheticEvent} e 
     */
    onThumbnailActive( e ) {

        const middle = this.refs.centralPicture ,
            hasClicked = e.target
        ;

        if( !middle ) return ;

        const temp = hasClicked.src ;
        hasClicked.src = middle.src ; 
        middle.src = temp ;
    }

    render() {

        return (
            <DocumentTitle title="home">
                <section className="Home">
                    <h1>
                        <span>Lorem Senzum</span>
                        <blockquote>Factory template of <a data-tip="go 2 real platform of Senzu" href="https://senzu.app">senzu.app</a></blockquote>
                    </h1>

                    <article>

                        <section>

                            <div>

                                <h2>Lorem Picsum</h2>

                                <p>
                                    Do nisi proident deserunt ut nulla sit reprehenderit non ,<br />
                                    adipisicing culpa enim nisi qui id nostrud cupidatat consequat ipsum aliqua et ,<br />
                                    lorem commodo irure do tempor dolor eu velit enim incididunt.
                                </p>

                                <div>
                                    <button>get started</button>
                                    <button>download</button>
                                </div>

                            </div>

                            <aside>
                                <figure className="wrap-middle-picture">
                                    <img
                                        ref="centralPicture"
                                        src={"https://picsum.photos/id/6/500/250"}
                                        alt="factory random"
                                        width="550"
                                        height="275"
                                        className="middle-picture"
                                    />
                                    {/* list thumbnail */}
                                    <figcaption>
                                        {
                                            Array.from( Array( 4 ).keys() , x => x+1 ).map( key => (
                                                <figure key={key}>
                                                    <img
                                                        src={`https://picsum.photos/id/${key+1}/500/250`}
                                                        alt="factory random"
                                                        width="125"
                                                        height="67"
                                                        className={`key-${key+1}`}
                                                        onClick={this.onThumbnailActive}
                                                    />              
                                                </figure>
                                            ) )
                                        }
                                    </figcaption>
                                </figure>
                            </aside>

                        </section>

                    </article>

                </section>
            </DocumentTitle>
        ) ;
    }
};
