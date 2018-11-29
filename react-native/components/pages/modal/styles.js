import { StyleSheet, Dimensions } from 'react-native'

export default StyleSheet.create({
  container: { justifyContent: 'center', alignItems: 'center', backgroundColor: 'transparent' },
  content: { backgroundColor: 'white', borderRadius: 5, width: Dimensions.get('window').width * 0.75, maxWidth: 320 },
  title: { textAlign: 'center', fontSize: 18, paddingHorizontal: 20, paddingTop: 20 },
  message: { textAlign: 'center', fontSize: 16, marginVertical: 10, paddingHorizontal: 20 },
  actions: { flexDirection: 'row', justifyContent: 'space-around' },
  acept: { textAlign: 'center', fontSize: 16, padding: 15 },
  cancel: { textAlign: 'center', fontSize: 16, padding: 15 }
})
