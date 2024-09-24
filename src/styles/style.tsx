import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#fff',
  },
  icon: {},
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f2f5',
  },
  text: {
    fontSize: 20,
  },
  headingText: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    color: '#000',
    fontSize: 13,
    fontWeight: 'bold',
  },

  //Professional Card
  card: {
    width: '90%',
    marginVertical: 10,
    paddingLeft: 25,
    paddingBottom: 25,
    paddingRight: 15,
    paddingTop: 15,
    backgroundColor: '#fff',
    alignSelf: 'center',
    borderRadius: 20,
    shadowColor: '#000',
    elevation: 10,
  },
  topCard: {
    width: '98%',
    flexDirection: 'row',
  },
  topCardLeft: {
    width: '30%',
    height: 'auto',
  },
  topCardRight: {
    width: '70%',
  },
  topCardRighttop: {
    paddingLeft: 20,
    paddingBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  topCardRightBottom: {
    paddingBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  bottomCard: {
    flexDirection: 'row',
  },
  name: {
    fontSize: 16,
    color: '#000',
  },
  location: {
    fontSize: 14,
    color: '#000',
  },
  about: {
    paddingLeft: 10,
    fontSize: 13,
    color: '#000',
  },
  profession: {
    paddingLeft: 10,
    fontSize: 14,
    color: '#000',
  },

  // Popular Card

  popularListContainer: {
    height: '35%',
  },

  popularCard: {
    marginHorizontal: 10,
    overflow: 'hidden',
    height: '100%',
    borderRadius: 8,
  },

  popularCardImage: {
    resizeMode: 'contain',
    overflow: 'hidden',
  },

  //Category Card
  categoryCard: {
    marginHorizontal: 10,
  },

  // Individual Card
  cardIndividual: {
    width: '90%',
    marginVertical: 10,
    paddingHorizontal: 10,
    paddingVertical: 15,
    backgroundColor: '#fff',
    alignSelf: 'center',
    borderRadius: 15,
    shadowColor: '#000',
    elevation: 10,
    flexDirection: 'row',
  },
  cardIndividualLeft: {
    width: '20%',
  },
  cardIndividualMiddle: {
    width: '60%',
    justifyContent: 'center',
  },
  cardIndividualRight: {
    width: '20%',
    justifyContent: 'center',
  },

  nameCard: {
    fontSize: 16,
    color: '#000',
    fontWeight: 'bold',
  },
  lastMessege: {
    fontSize: 14,
    color: '#000',
    fontWeight: '300',
  },
  imageCard: {},
  cardIndividualRightBtn: {
    width: 30,
    height: 30,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#EAE9E9',
  },
  arrow: {},
  popup: {
    width: '70%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: '#EAE9E9',
    paddingVertical: 10,
    borderRadius: 25,
    marginTop: -25,
  },
  popupBtn: {
    width: 30,
    height: 30,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E9E2E2',
  },

  //  Details Part

  details: {
    alignItems: 'center',
  },
  detailsImagePart: {
    width: '90%',
    height: 350,
    borderRadius: 20,
    marginVertical: 5,
    overflow: 'hidden',
  },
  detailsImage: {
    width: '100%',
    height: '100%',
  },
  cunnectionStatusLeft: {
    padding: 5,
    position: 'absolute',
    top: 15,
    left: 15,
    backgroundColor: '#E9E2E2',
    borderRadius: 20,
  },
  cunnectionStatusRight: {
    padding: 8,
    position: 'absolute',
    top: 15,
    right: 15,
    backgroundColor: '#E9E2E2',
    borderRadius: 20,
  },
  detailsTextPart: {
    width: '95%',
    backgroundColor: '#dadada',
    borderRadius: 20,
    marginVertical: 5,
    overflow: 'hidden',
  },
  detailsTextAll: {
    padding: 15,
  },
  detailsTextHeading: {
    fontSize: 18,
    color: '#000',
    fontWeight: '900',
  },
  detailsText: {
    fontSize: 14,
    color: '#000',
    fontWeight: '500',
  },
  detailsTextParagraph: {
    fontSize: 12,
    color: '#000',
    fontWeight: '400',
    textAlign: 'justify',
    marginTop: 15,
  },
  cunnection: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },

  cunnectionPart: {
    flexDirection: 'row',
    gap: 5,
    alignItems: 'center',
    marginVertical: 8,
  },
  cunnectionLeft: {
    padding: 8,
    backgroundColor: '#95BCFD',
    borderRadius: 20,
  },
  cunnectionRight: {
    color: '#000',
    padding: 8,
    backgroundColor: '#95BCFD',
    borderRadius: 20,
  },
  //Log In
  logInContainer: {
    flex: 1,
    // backgroundColor: '#C0D4F6',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 60,
  },
  logInHeading: {
    fontSize: 36,
    fontWeight: '900',
    color: '#000000',
  },
  logInTextInput: {
    paddingHorizontal: 30,
    paddingVertical: 5,
    fontSize: 20,
    borderRadius: 20,
    backgroundColor: '#FFFCFC',
    color: '#2B3F99',
  },
  logInButton: {
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderRadius: 20,
    backgroundColor: '#71A4F8',
  },
  logInButtonText: {
    fontSize: 16,
    color: '#ffffff',
  },
  createAccountButton: {
    marginTop: 50,
  },
  createAccountButtonText: {
    fontSize: 14,
    color: '#585055',
  },
});

export default styles;
