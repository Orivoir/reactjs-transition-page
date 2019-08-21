import React from 'react';
import DocumentTitle from 'react-document-title';

export default class Home extends React.Component {
    
    render() {

        return (
            <DocumentTitle title="factory">
                <section className="Factory">
                    <h1>
                        <span>Lorem Senzum</span>
                        <blockquote>Factory template of <a data-tip="go 2 real platform of Senzu" href="https://senzu.app">senzu.app</a></blockquote>
                    </h1>
                </section>
            </DocumentTitle>
        )
    }
};
