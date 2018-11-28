import React, { Component } from 'react';
import { StyleSheet, Image, View } from 'react-native';
import { connect } from 'react-redux';
import MapView, { Marker } from 'react-native-maps';

import { getBins } from '../actions/bins';

import Point from '../components/point';
// import bins from '../data/bins';
import {
  StyledButtonBlack,
  StyledButtonText
} from '../components/utilities';

class Map extends Component {
  constructor(props) {
    super(props);

    this.state = {
      point: 0,
      region: {
        latitude: 0,
        longitude: 0,
        latitudeDelta: 0,
        longitudeDelta: 0,
      },
    };
  }

  componentWillMount() {
    this.props.getBins();

    navigator.geolocation.getCurrentPosition(
      ({coords}) => {
        this.setState({
          region: {
            latitude: coords.latitude,
            longitude: coords.longitude,
            latitudeDelta: 0.0050,
            longitudeDelta: 0.0050,
          }
        });
      },
      (error) => {
        console.log(error)
      },
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
    );
  }

  componentWillUnmount() {
    console.log('Unmount');
  }

  onRegionChange = (region) => {
    this.setState({ region });
  }

  transfer = () => {
    this.props.navigation.navigate('Transfer')
  }

  render() {
    const {user, bins} = this.props;

    const {point} = user;
    return (
      <View
        style={styles.map}
      >
        <View
          style={styles.buttonView}
        >
          <Point
            style={{ width: 30, height: 31 }}
            styleText={{ fontSize: 22 }}
            text={point}
          />
          <StyledButtonBlack
            onPress={this.transfer}
          >
            <StyledButtonText>
              Transfer
            </StyledButtonText>
          </StyledButtonBlack>
        </View>
        <MapView
          style={styles.map}
          region={this.state.region}
          showsUserLocation={true}
        >
          {bins.map(marker => (
            <Marker
              key={marker.title}
              coordinate={marker.latlng}
              title={marker.title}
              description={marker.description}
            >
              <Image
                source={require('../../assets/marker.png')}
                style={{ width: 40, height: 50 }}
              />
            </Marker>
          ))}
        </MapView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  buttonView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#FFFFFF',
    width: '100%',
    padding: 15,
    paddingBottom: 10,
    position: 'absolute',
    bottom: 0,
    zIndex: 2,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomWidth: 1,
    borderColor: '#F2F2F2'
  },
  pointFont: {
    fontFamily: 'Roboto-Medium',
    paddingLeft: 10,
    fontSize: 20
  }
});

const mapStateToProps = state => ({
  user: state.user,
  bins: state.bins,
});

const mapDispatchToProps = dispatch => ({
  getBins: () => dispatch(getBins()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Map);