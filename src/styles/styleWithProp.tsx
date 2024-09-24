import {StyleSheet} from 'react-native';

export const stylesWithProp = (props?: any) =>
  StyleSheet.create({
    //Professional Card
    card: {
      width: '90%',
      marginVertical: 10,
      paddingLeft: 25,
      paddingBottom: 25,
      paddingRight: 15,
      paddingTop: 15,
      backgroundColor: (props as boolean) ? '#95BCFD' : '#fff',
      alignSelf: 'center',
      borderRadius: 20,
      shadowColor: '#000',
      elevation: 10,
    },

    // Individual Card
    cardIndividual: {
      width: '90%',
      marginVertical: 10,
      paddingHorizontal: 10,
      paddingVertical: 15,
      backgroundColor: (props as boolean) ? '#95BCFD' : '#fff',
      alignSelf: 'center',
      borderRadius: 15,
      shadowColor: '#000',
      elevation: 10,
      flexDirection: 'row',
    },
  });
export default stylesWithProp;
