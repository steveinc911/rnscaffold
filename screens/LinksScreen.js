import React from 'react';
import { ScrollView, StyleSheet, View, Text } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import { connect }          from 'react-redux'
import { login } from '../src/features/account/actions/security'

class LinksScreen extends React.Component {
  constructor(props) {
    super(props)

    console.log('logging in')

    this.props.login('Kriss')
  }

  static navigationOptions = {
    title: 'Links',
  };

  render() {
    return (
      <View>
        <Text>
          {JSON.stringify(this.props.account)}
        </Text>
        <ScrollView style={styles.container}>
        
          {/* Go ahead and delete ExpoLinksView and replace it with your
            * content, we just wanted to provide you with some helpful links */}
          <ExpoLinksView />
        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = ( state ) => ( {
  account: state.account,
} )

const mapDispatchToProps = ( dispatch ) => ( {
  login: user => {
    console.log(login.request( user, 'pass123' ).type)
    return dispatch( login.request( user, 'pass123' ) )
  },
} )

export default connect( mapStateToProps, mapDispatchToProps )( LinksScreen )

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
