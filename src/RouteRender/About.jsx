import React from 'react';
import DocumentTitle from 'react-document-title';
import './About.css';
import Rank from './../Rank';

export default class Home extends React.Component {
    
    render() {

        return (
            <DocumentTitle title="about">
                <section className="About">
                    <h1>
                        <span>Lorem Senzum</span>
                        <blockquote>Factory template of <a data-tip="go 2 real platform of Senzu" href="https://senzu.app">senzu.app</a></blockquote>
                    </h1>

                    <article>

                        {
                            Array.from( Array( ( Math.floor( Math.random() * 7 ) + 5 ) ).keys() ).map( key => (
                                <section key={key} className={`bannner banner-home banner-${(key+1) % 2 === 0 ? 'even' : 'noteven'}`}>

                                    <div>
                                        <h2>Lorem Picsum</h2>
                                        <p>Amet in quis deserunt elit laboris enim.</p>
                                        <p>
                                            <a href="#" data-tip="factory link">Learn more</a>
                                        </p>

                                        <Rank />
                                    </div>

                                    {/* Lorem picsum in aside */}
                                    <aside>
                                        <figure>
                                            <img
                                                src={`https://picsum.photos/id/${Math.floor( Math.random() * 85 ) + 1}/350/275`}
                                                alt="random factory"
                                                width="350"
                                                height="275"
                                            />
                                            <figcaption>Lorem Picsum random picture</figcaption>
                                        </figure>

                                    </aside>


                                </section>
                            ) )
                        }

                    </article>

                </section>
            </DocumentTitle>
        )
    }
};
