import React, { Component } from 'react';
import { View, ScrollView, StyleSheet, RefreshControl } from 'react-native';
import { connect } from 'react-redux';
import Box from '../components/box';
import Loading from '../components/loading';
import { theme } from '../../app.json'

import { getNews } from '../actions/news';

import {
  Header,
  HeaderTitle
} from '../components/utilities';

class News extends Component {
  constructor(props) {
    super(props);

    this.state = {
      refreshing: false
    }
  }

  componentWillMount() {
    this.props.getNews();
  }

  _onRefresh = () => {
    this.setState({refreshing: true});
    this.props.getNews();
    this.setState({refreshing: false});
  }

  render() {
    const { refreshing } = this.state;
    const { news } = this.props;

    return (
      <View style={{ height: '100%' }}>
        <Header>
          <HeaderTitle>News</HeaderTitle>
        </Header>
        {news.length == 0 ?
          <Loading />
          :
          <ScrollView
            style={styles.container}
            refreshControl={
              <RefreshControl
                tintColor={theme.primaryColor}
                refreshing={refreshing}
                onRefresh={this._onRefresh}
              />
            }
          >
            {news.map(item => <Box key={item.title} content={item} navigation={this.props.navigation} />)}
          </ScrollView>
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.thirdColor,
  }
});

const mapStateToProps = state => ({
  news: state.news,
});

const mapDispatchToProps = dispatch => ({
  getNews: () => dispatch(getNews())
});

export default connect(mapStateToProps, mapDispatchToProps)(News);