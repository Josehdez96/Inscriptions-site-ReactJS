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

  function useSearchBadges(badges) {
    const [ query, setQuery ] = React.useState("");
    const [ filteredBadges, setFilteredBadges ] = React.useState(badges)

    React.useMemo(() => { //Para no tener que hacer la busqueda cada que escriban, si no, usar cache, usamos useMemo(__funcion__, que_variable_cambia_para_calcular_todo_de_nuevo)
        const result = badges.filter(badge => {
        return `${badge.firstName} ${badge.lastName}`
        .toLowerCase()
        .includes(query.toLowerCase());
        })  

        setFilteredBadges(result)
    }, [ badges, query ]);

    return { query, setQuery, filteredBadges }
  }


function  BadgesList (props) {
    const badges = props.badges;

    const { query, setQuery, filteredBadges } = useSearchBadges(badges) 
    

        if (filteredBadges.length === 0) {
            return (
                <div>
                    <h3>No badges were found</h3>
                        <div className="form-group">
                            <label>Filter badges</label>
                            <input type="text" className="form-control" 
                            value={query}
                            onChange={(e) => {
                                setQuery(e.target.value)
                            }}
                            />
                    </div>
                    <Link className="btn btn-primary" to="/badges/new">
                        Create new badge
                    </Link>
                </div>
            )
        }
        return (
            <div className="BadgesList">
                <div className="form-group">
                    <label>Filter badges</label>
                    <input type="text" className="form-control" 
                    value={query}
                    onChange={(e) => {
                        setQuery(e.target.value)
                    }}
                    />
                </div>
                <ul className="list-unstyled">
                    {filteredBadges.map(badge => {
                        return (
                            //Se hace para evitar Warning en la consola, pasamos un elemento unico, el ||key|| le ayuda a React a saber cuando renderiza
                            <li key={badge.id}>
                                <Link className="text-reset text-decoration.none" to={`/badges/${badge.id}`}>  
                                    <BadgesListItem badge={badge} />
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </div>
        )
}


export default BadgesList;