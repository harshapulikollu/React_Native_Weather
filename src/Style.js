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
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'pink'
  },
  tempTextContainer: {
    fontSize: 50
  },
  countryContainer: {
    flex: 25,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'green'
  },
  countryTextContainer: {
    fontSize: 18
  }
});

export default Style;
