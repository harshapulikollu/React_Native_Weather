import { StyleSheet } from 'react-native';

var Style = StyleSheet.create({
  container: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'brown',
},
  weatherContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  ActivityIndicator: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: 20,
    alignItems: 'center',

  },
  ActivityIndicatorContainer: {
    flex: 1,
     justifyContent: 'center',
     alignItems: 'center',
     marginTop: 70
  },
  weatherTypeConatiner: {
    flex: 25,
    justifyContent: 'center',
    alignItems: 'center',

  },
  weatherTypeTextConatiner: {
    fontSize: 25,
    color: 'white'
  },
  tempContainer: {
    flex: 50,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',

  },
  tempTextContainer: {
    fontSize: 50,
    color: 'white'
  },
  countryContainer: {

    flexDirection: 'column',
    alignItems: 'center',

  },
  countryTextContainer: {
    fontSize: 18,
    color: 'white'
  },
  BottomContainer: {
    flex : 25,

  }
});

export default Style;
