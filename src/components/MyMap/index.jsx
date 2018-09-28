// Packages
import React, {Component} from 'react';
import GoogleMapReact from 'google-map-react';
import MyGreatPlaceWithStick from '../../components/MyGreatPlaceWithStick/index';
import PropTypes from 'prop-types';
import { K_CIRCLE_SIZE, K_STICK_SIZE } from '../../components/MyGreatPlaceWithHover/index';

import { Link } from 'react-router-dom';

export default class MyMap extends Component {
    static propTypes = {
        center: PropTypes.array,
        zoom: PropTypes.number,
        greatPlaceCoords: PropTypes.any
    };
    static defaultProps = {
        center: {lat: 40.95847652178514, lng: 39.679042593749955},
        zoom: 10,
        greatPlaceCoords: {lat: 40.95847652178514, lng: 39.679042593749955},
        styles: [
            {
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#000000"
                    }
                ]
            },
            {
                "elementType": "labels.icon",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#616161"
                    }
                ]
            },
            {
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "color": "#f5f5f5"
                    }
                ]
            },
            {
                "featureType": "administrative.land_parcel",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#bdbdbd"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#eeeeee"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "labels.text",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#757575"
                    }
                ]
            },
            {
                "featureType": "poi.business",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#e5e5e5"
                    }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#9e9e9e"
                    }
                ]
            },
            {
                "featureType": "road",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#ffffff"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "labels.icon",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#757575"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#dadada"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#616161"
                    }
                ]
            },
            {
                "featureType": "road.local",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#9e9e9e"
                    }
                ]
            },
            {
                "featureType": "transit",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "transit.line",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#e5e5e5"
                    }
                ]
            },
            {
                "featureType": "transit.station",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#eeeeee"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#c9c9c9"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#9e9e9e"
                    }
                ]
            }
        ]
    };
    _distanceToMouse = (markerPos, mousePos, markerProps) => {
        const x = markerPos.x;
        const y = markerPos.y - K_STICK_SIZE - K_CIRCLE_SIZE / 2;
        const distanceKoef = markerProps.text !== 'A' ? 1.5 : 1;
        return distanceKoef * Math.sqrt((x - mousePos.x) * (x - mousePos.x) + (y - mousePos.y) * (y - mousePos.y));
    }
    render() {
        return (
            <div className='google-map' style={{height: '500px', width: '100%'}}>
                <GoogleMapReact
                    bootstrapURLKeys={{key: 'AIzaSyAXoWKPTU-dgr9SzSFQoH_ts6oPEqW7F2I'}}
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                    defaultOptions={this.props.styles}
                    hoverDistance={K_CIRCLE_SIZE / 2}
                    distanceToMouse={this._distanceToMouse}
                >
                    <MyGreatPlaceWithStick lat={40.95847652178514} lng={39.679042593749955} text={'Dolu'} zIndex={2}/>
                    <MyGreatPlaceWithStick lat={40.95847652178514} lng={39.780666128906205} text={'Boş'} zIndex={2}/>
                    <MyGreatPlaceWithStick lat={40.951994400048356} lng={39.86649681738277} text={'Dolu'} zIndex={2}/>
                    <MyGreatPlaceWithStick lat={40.997874121748005} lng={39.73328758886714} text={'Boş'} zIndex={2}/>
                    <MyGreatPlaceWithStick lat={40.99997941642052} lng={39.76002384832759} text={'Boş'} zIndex={2}/>
                    <MyGreatPlaceWithStick lat={40.99243243325143} lng={39.77324177435298} text={'Dolu'} zIndex={2}/>
                    <MyGreatPlaceWithStick {...this.props.greatPlaceCoords} text={'B'} zIndex={1}/>
                </GoogleMapReact>
            </div>
        )
    }
}
