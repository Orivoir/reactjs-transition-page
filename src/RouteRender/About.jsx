import React from 'react';
import DocumentTitle from 'react-document-title';

export default class Home extends React.Component {
    
    render() {

        return (
            <DocumentTitle title="about">
                <section className="About">
                    <h1>About</h1>
                </section>
            </DocumentTitle>
        )
    }
};
