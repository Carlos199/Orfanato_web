import React from 'react';
import mapMarkerImg from '../images/map-marker.svg';
import { Link } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi';
import { Map, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';

import '../styles/pages/orphanages-map.css';

function OrphanagesMap() {
  return (
    <div id="page-map">
      <aside>
        <header>
          <img src={mapMarkerImg} alt="happy" />
          <h2>Escoja un orfanato en el mapa</h2>
          <p>Muchos niños estan esperando su visita :)</p>
        </header>

        <footer>
          <strong>Guaira Villarrica</strong>
          <span>Villarrica</span>
        </footer>
      </aside>
      <Map
        center={[-25.7835816, -56.4383949]}
        zoom={15}
        style={{ width: '100%', height: '100%' }}
      >
        {/*"https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"*/}
        <TileLayer
          url={`https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
        />
      </Map>
      <Link to="" className="create-orphanage">
        <FiPlus size={32} color="#FFF" />
      </Link>
    </div>
  )
}
export default OrphanagesMap;