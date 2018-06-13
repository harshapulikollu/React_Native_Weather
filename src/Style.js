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
    backgroundColor: 'yellow'
  },
  weatherTypeTextConatiner: {
    fontSize: 25
  },
  tempContainer: {
    flex: 50,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: 'pink'
  },
  tempTextContainer: {
    fontSize: 50
  },
  countryContainer: {

    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'green'
  },
  countryTextContainer: {
    fontSize: 18
  },
  BottomContainer: {
    flex : 25,
    backgroundColor: 'red'
  }
});

export default Style;
