// @flow
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    margin: 20
  },
  titleName: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#007",
    borderBottomWidth: 2,
    borderBottomColor: "#007"
  },
  contact: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#bbb",
    flexDirection: "row"
  },
  profilePhoto: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#007",
    flexDirection: "row"
  },
  contactDetails: {
    padding: 0
  },
  contactName: {
    color: "#007",
    marginLeft: 20,
    paddingTop: 5,
    fontWeight: "bold"
  },
  phoneNumber: {
    marginLeft: 20,
    paddingTop: 5,
    color: "grey"
  },
  initialName: {
    flex: 1,
    color: "white",
    fontSize: 40,
    textAlign: "center"
  }
});
