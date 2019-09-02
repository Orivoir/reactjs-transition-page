import React from 'react';

export default class Rank extends React.Component {

    componentDidMount() {

        const e = new Event('rank-ready');
        document.dispatchEvent( e ); /** he ho i'm ready here ... */
    }

    /**
     * Rank system is define Phisical dom in index.html , usage micro-library : fluid-rank-stars
     * repositorie [https://github.com/Orivoir/fluid-rank-stars/]
     * usage [https://orivoir.github.io/fluid-rank-stars/]
     * @author <sam.gabor@hotmail.com>
     */
    render() {

        return (
            <section
                className="Rank"
            >
                {/* className of library rank */}
                <ul className="contain-fluid-rank flex auto-responsive">
                    {
                        Array.from( Array(5).keys() ).map( key => (
                            <li
                                className="item-fluid-rank"
                                key={key}
                            >
                            </li>
                        ) )
                    }
                </ul>
                <span className="rank-text"></span>
            </section>
        ) ; 
    }
};
