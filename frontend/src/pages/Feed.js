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
                                            <span className="place">Condado</span>
                                        </div>
                                        <img src="https://img.icons8.com/ios-glyphs/30/000000/more.png" alt=""></img>  
                                    </header>
                                    <img src="https://scontent-bru2-1.cdninstagram.com/vp/44e110bc433fefad610dcfe4e471481b/5D783633/t51.2885-15/sh0.08/e35/p750x750/47037776_260880274588795_1163094274943854804_n.jpg?_nc_ht=scontent-bru2-1.cdninstagram.com&ig_cache_key=MTkzMzQ3NTE5NTgwNTc2MDg5OA%3D%3D.2" alt=""></img>
                                    <footer>
                                            <div className="actions">
                                                <img src="https://img.icons8.com/material-outlined/24/000000/filled-like.png" alt=""></img>
                                                <img src="https://img.icons8.com/ios/24/000000/topic.png" alt=""></img>    
                                                <img src="https://img.icons8.com/material-rounded/24/000000/filled-sent.png" alt=""></img>
                                            </div>
                                            <strong>curtidas</strong>
                                            <p>
                                                
                                                <span>#sucesso</span>
                                            </p>
                                        </footer>
                                </article>
            </section>
        );
    }
}

export default Feed;