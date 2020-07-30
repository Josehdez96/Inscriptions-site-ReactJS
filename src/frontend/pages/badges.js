import React from 'react';
import { Link } from 'react-router-dom';

import './styles/badges.css';
import confLogo from '../images/badge-header.svg';
import BadgesList from '../components/badgesList.js';
import PageError from '../components/PageError';
import PageLoading from '../components/PageLoading.js';

import api from './api';

class Badges extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //Aquí estan todas las insignias
      loading: true,
      error: null,
      data: undefined,
    };
  }

  componentDidMount() {
    this.fetchData();

    this.intervalId = setInterval(this.fetchData, 5000);
  }

  fetchData = async () => {
    this.setState({ loading: true, error: null });

    try {
      const data = await api.badges.list();
      this.setState({ loading: false, data: data });
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };

  componentDidUpdate(prevProps, prevState) {
    //Prueba: Se ejecuta despues de que el componentDidMount hace que se renderice la pagina nuevamente
  }

  componentWillUnmount() {
    //Se ejecuta en el momento exacto antes de que el componente desaparezca del DOM (antes de ir a otra pagina por ejemplo)
    clearInterval(this.intervalId); //Liberación de memoria
  }

  render() {
    if (this.state.loading && !this.state.data) {
      return <PageLoading />;
    }

    if (this.state.error) {
      return <PageError error={this.state.error} />;
    }

    return (
      <React.Fragment>
        <div className="Badges">
          <div className="Badges__hero">
            <div className="Badges__container">
              <img
                className="Badges_conf-logo"
                src={confLogo}
                alt="Logo PlatziConf"
              />
            </div>
          </div>
        </div>
        <div className="Badge__container">
          <div className="Badges__buttons">
            <Link to="/badges/new" className="btn btn-primary">
              Add New Badge
            </Link>
          </div>
          <div className="Badges__list">
            <div className="Badges__container">
              <BadgesList badges={this.state.data} />

              {this.state.loading && 'Loading...'}
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Badges;
