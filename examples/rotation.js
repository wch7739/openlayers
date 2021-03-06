import Map from '../src/ol/Map.js';
import View from '../src/ol/View.js';
import {defaults as defaultControls} from '../src/ol/control.js';
import TileLayer from '../src/ol/layer/Tile.js';
import OSM from '../src/ol/source/OSM.js';


const map = new Map({
  layers: [
    new TileLayer({
      source: new OSM()
    })
  ],
  target: 'map',
  controls: defaultControls({
    attributionOptions: {
      collapsible: false
    }
  }),
  view: new View({
    center: [14200000, 4130000],
    rotation: Math.PI / 6,
    zoom: 10
  })
});
