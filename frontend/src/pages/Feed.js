import React, { Component } from 'react';

import './Feed.css';

class Feed extends Component {
    render() {
        return (
            <section id="post-list">
                <article>
                    <header>
                        <div className="user-info">
                            <span>Ruan Carlos</span>
                            <span className="place">Rio Tinto</span>
                        </div>
                        <img src="https://img.icons8.com/ios-glyphs/30/000000/more.png" alt=""></img>  
                    </header>
                    <img src="http://localhost:3333/files/9cd03d3886eb8e1e8e6a3ce84f9d9bfa--getulio-vargas-brazil-news.jpg" alt=""></img>
                    <footer>
                            <div className="actions">
                                <img src="https://img.icons8.com/material-outlined/24/000000/filled-like.png" alt=""></img>
                                <img src="https://img.icons8.com/ios/24/000000/topic.png" alt=""></img>    
                                <img src="https://img.icons8.com/material-rounded/24/000000/filled-sent.png" alt=""></img>
                            </div>
                            <strong>900 curtidas</strong>
                            <p>
                                Um post muito massa !
                                <span>#react #reactjs #web</span>
                            </p>
                        </footer>
                </article>
                <article>
                    <header>
                        <div className="user-info">
                            <span>Ruan Carlos</span>
                            <span className="place">Rio Tinto</span>
                        </div>
                        <img src="https://img.icons8.com/ios-glyphs/30/000000/more.png" alt=""></img>  
                    </header>
                    <img src="http://localhost:3333/files/9cd03d3886eb8e1e8e6a3ce84f9d9bfa--getulio-vargas-brazil-news.jpg" alt=""></img>
                    <footer>
                            <div className="actions">
                                <img src="https://img.icons8.com/material-outlined/24/000000/filled-like.png" alt=""></img>
                                <img src="https://img.icons8.com/ios/24/000000/topic.png" alt=""></img>    
                                <img src="https://img.icons8.com/material-rounded/24/000000/filled-sent.png" alt=""></img>
                            </div>
                            <strong>900 curtidas</strong>
                            <p>
                                Um post muito massa !
                                <span>#react #reactjs #web</span>
                            </p>
                        </footer>
                </article>
            </section>
        );
    }
}

export default Feed;