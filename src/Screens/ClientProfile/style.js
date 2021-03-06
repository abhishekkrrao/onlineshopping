import { StyleSheet } from 'react-native';
export default {
  container: {
    flex: 1,  backgroundColor: "#fff",  paddingTop: 15
  },
  header: {
    flex: 1,  flexDirection: "row",  width: "100%"
  },
  headerContainer: {
    backgroundColor: "#ccc",
  },
  right_container: {
    padding: 20,
    alignItems: 'flex-start',
  },
  headerContent: {
    padding: 15,
    width: "35%",
    alignItems: 'flex-start',
  },
  text_v: { flex: 1, color: "#ffb800", paddingEnd: 40, paddingTop: 10, paddingBottom: 10, fontFamily: "Montserrat-Medium", fontSize: 14, textAlign: "right" },
  scene: {
    flex: 1,
    backgroundColor: "#ccc",
  }, imageThumbnail: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
  },
  avatar1: {
    width: 130,
    height: 130,
    borderRadius: 63,
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    padding: 5
  },
  norecordView: { flex: 1, width: '100%', height: "100%", backgroundColor: "#fff", alignContent: "center", alignSelf: "center", alignItems: "center", },
  norecord: { fontSize: 21, height: "100%", fontFamily: "boldme", padding: 5, textTransform: "none", alignContent: "center", alignSelf: "center", alignItems: "center" },
  name: {
    fontSize: 22,
    color: "#000000",
    fontWeight: '600',
    fontFamily: "Montserrat-Medium"
  },
  userInfo: {
    fontSize: 16,
    color: "#778899",
    fontWeight: '600',
    paddingLeft: 0,
    fontFamily: "Montserrat-Medium"
  },
  followButtom: { width: 100, height: 40, backgroundColor: "#7E57C2", marginTop: 10 ,borderRadius:5 },
  followButtom_valid: { width: 100, height: 40, backgroundColor: "#ffb800", marginTop: 10 ,borderRadius:5 },
  followButtomText: { color: "#fff", textAlign: "center", paddingTop: 10, fontFamily: "Montserrat-Medium" },
  followText: {
    fontSize: 16,
    color: "#000",
    fontWeight: '600',
    fontFamily: "Montserrat-Medium"
  },
  followTexts: {
    fontSize: 18,
    paddingLeft: 5,
    color: "#000",
    fontWeight: '900',
    fontFamily: "Montserrat-Medium"
  },
  body: {
    backgroundColor: "#778899",
    height: 50,
    alignItems: 'center',
    fontFamily: "Montserrat-Medium"
  },
  item: {
    flex: 1,
    width: "100%",
    height: 1,
    backgroundColor: "#ccc"
  },
  infoContent: {
    flex: 1,
    alignItems: 'flex-start',
    paddingLeft: 5,
    fontFamily: "Montserrat-Medium"
  },
  iconContent: {
    flex: 1,
    alignItems: 'flex-end',
    paddingRight: 5,
    fontFamily: "Montserrat-Medium",
    justifyContent: 'center',
    textAlignVertical: 'center',
    textAlign: 'center'
  },
  icon: {
    width: 30,
    height: 30,
    marginTop: 20,
  },
  info: {
    fontSize: 18,
    marginTop: 20,
    color: "#FFFFFF",
  }
};
