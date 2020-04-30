import React from "react";

import "../components/styles/Badge.css"

class BadgesList extends React.Component {
    render() {
        return (
                <ul className="list-unstyled">
                    {this.props.badges.map((badge) => {
                        return (                        
                                <li key={badge.id} /*Se hace para evitar Warning en la consola, pasamos un elemento unico, el ||key|| le ayuda a React a saber cuando renderiza*/>                            
                                    <div className="BadgeList">                                        
                                        <div className="Badge__section-nameList">
                                            <img className="Badge__avatar"
                                            src={badge.avatarUrl}
                                            alt ="Imagen de Avatar"
                                            />
                                            <div>
                                                <h5 className="font-weight-bold">{badge.firstName} {badge.lastName}</h5>
                                                <p className="Badge_section-twitter">@{badge.twitter}</p>
                                                <p className="Badge_section-jobTitle">{badge.jobTitle}</p>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                        )
                    })}
                </ul>
        )
    }
}

export default BadgesList;