import React from "react";
import { Link } from "react-router-dom"

import "../components/styles/BadgesList.css"
import Gravatar from "./Gravatar"

class BadgesListItem extends React.Component {
    render () {
      return (
      <div className="BadgesListItem">
          <Gravatar className="BadgesListItem__avatar" email={this.props.badge.email}/>
              <div>
                  <h5 className="font-weight-bold">{this.props.badge.firstName} {this.props.badge.lastName}</h5>
                  <p className="Badge_section-twitter">@{this.props.badge.twitter}</p>
                  <p className="Badge_section-jobTitle">{this.props.badge.jobTitle}</p>
              </div>
      </div>
      )
    }
  }


class BadgesList extends React.Component {
    render() {
        if (this.props.badges.length === 0) {
            return (
                <div>
                    <h3>No badges were found</h3>
                    <Link className="btn btn-primary" to="/badges/new">
                        Create new badge
                    </Link>
                </div>
            )
        }
        return (
            <div className="BadgesList">
                <ul className="list-unstyled">
                    {this.props.badges.map(badge => {
                        return (
                            //Se hace para evitar Warning en la consola, pasamos un elemento unico, el ||key|| le ayuda a React a saber cuando renderiza
                            <li key={badge.id}>
                                <Link className="text-reset text-decoration.none" to={`/badges/${badge.id}/edit`}>  
                                    <BadgesListItem badge={badge} />
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </div>
        )
    }
}


export default BadgesList;