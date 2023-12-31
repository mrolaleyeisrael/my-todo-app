import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>My Todos</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    height: 80,
    width: '100%',
    paddingTop: 28,
    backgroundColor: 'coral'
  },
  title: {
    textAlign: 'center',
    color: '#ccc',
    fontSize: 20,
    fontWeight: 'bold'
  }
})

export default Header


// import React from 'react';
// import { View, Text, StyleSheet } from 'react-native';

// export default function Header() {
//   return (
//     <View style={styles.header}>
//       <Text style={styles.title}>My Todos</Text>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   header: {
//     height: 80,
//     paddingTop: 28,
//     backgroundColor: 'coral',
//   },
//   title: {
//     textAlign: 'center',
//     color: '#fff',
//     fontSize: 20,
//     fontWeight: 'bold',
//   }
// });