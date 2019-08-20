import React from 'react';
import DocumentTitle from 'react-document-title';

export default class Home extends React.Component {
    
    render() {

        return (
            <DocumentTitle title="home">
                <section className="Home">
                    <h1>Home</h1>
                </section>
            </DocumentTitle>
        ) ;
    }
};
