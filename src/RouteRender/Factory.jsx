import React from 'react';
import DocumentTitle from 'react-document-title';
import './Factory.css';
import flaskSvg from './flask.svg';
import worksWeb from './worksWeb.png'

export default class Home extends React.Component {
    
    render() {

        return (
            <DocumentTitle title="factory">
                <section className="Factory">
                    <h1>
                        <span>Lorem Senzum</span>
                        <blockquote>Factory template of <a data-tip="go 2 real platform of Senzu" href="https://senzu.app">senzu.app</a></blockquote>
                    </h1>

                    <section className="build">

                        <h2>
                            Cette section en cours de construction
                            <figure>
                                <img
                                    src={flaskSvg}
                                    alt="fiole chimie caricature animé"
                                    width="55"
                                    height="55"
                                />
                            </figure>
                        </h2>

                        <section>
                            <figure>
                                <img
                                    className="worksWeb"
                                    src={worksWeb}
                                    alt="fiole chimie caricature animé"
                                />
                            </figure>

                        </section>

                    </section>

                </section>
            </DocumentTitle>
        )
    }
};
