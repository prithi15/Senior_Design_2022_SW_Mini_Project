/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import type {Node} from 'react';
import {
  Button,
  //SafeAreaView,
  //ScrollView,
  //StatusBar,
  StyleSheet,
  Text,
  TextInput,
  //ImageBackground,
  //useColorScheme,
  View,
} from 'react-native';

const image = { uri: "https://ichef.bbci.co.uk/news/976/cpsprodpb/15FE6/production/_121168009_gettyimages-1233346729.jpg" };

// import {
//   Colors,
//   DebugInstructions,
//   Header,
//   LearnMoreLinks,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';

/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */
// const Section = ({children, title}): Node => {
//   const isDarkMode = useColorScheme() === 'dark';
//   return (
//     <View style={styles.sectionContainer}>
//       <Text
//         style={[
//           styles.sectionTitle,
//           {
//             color: isDarkMode ? Colors.white : Colors.black,
//           },
//         ]}>
//         {title}
//       </Text>
//       <Text
//         style={[
//           styles.sectionDescription,
//           {
//             color: isDarkMode ? Colors.light : Colors.dark,
//           },
//         ]}>
//         {children}
//       </Text>
//     </View>
//   );
// };

const App: () => Node = () => {
  const[inputText, handleName] = React.useState('');
  // const isDarkMode = useColorScheme() === 'dark';

  // const backgroundStyle = {
  //   backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  // };

  // const backgroundStyle = {
  //   backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  // };

  //<ImageBackground source={image} style={styles.image}>
  // <Text style={styles.headertxt}>TwitterChecker</Text>
  // </ImageBackground>

  //onChangeText={onChangeTxt}
  //value={inputText}
  return (
    <View style ={styles.body}>

      <View style ={styles.header}> 
        <Text style={styles.headertxt}>TwitterChecker</Text>
      </View> 
      
      <View style={styles.body}>
        <Text style={styles.text}>
          Enter the twitter handle you want to check:
        </Text>
      
        <TextInput 
          style={styles.input}
          placeholder='@twitterhandle123'
          onChangeText={(value)=>handleName(value)}
        />
      
        <Text>
          Handle is: {inputText}
        </Text>

      </View>
    </View>
    // <SafeAreaView style={backgroundStyle}>
    //   <StatusBar
    //     barStyle={isDarkMode ? 'light-content' : 'dark-content'}
    //     backgroundColor={backgroundStyle.backgroundColor}
    //   />
    //   <ScrollView
    //     contentInsetAdjustmentBehavior="automatic"
    //     style={backgroundStyle}>
    //     <Header />


    //     <View
    //       style={{
    //         backgroundColor: isDarkMode ? Colors.black : Colors.white,
    //       }}>
    //       <Section title="Twitter Checker">
    //         Edit <Text style={styles.highlight}>App.js</Text> to change this
    //         screen and then come back to see your edits.
    //       </Section>
    //       <Section title="See Your Changes">
    //         <ReloadInstructions />
    //       </Section>
    //       <Section title="Debug">
    //         <DebugInstructions />
    //       </Section>
    //       <Section title="Learn More">
    //         Read the docs to discover what to do next:
    //       </Section>
    //       <LearnMoreLinks />
    //     </View>
    //   </ScrollView>
    // </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header:{
    backgroundColor: 'blue',
    padding: 20,
    width: '100%',
    marginBottom: 20
  },
  headertxt:{
    color: '#00000',
    backgroundColor: '#ffffff',
    fontWeight: 'bold',
    fontSize: 45,
    fontStyle: 'italic'
  },
  image: {
    flex: 1,
    alignContent: "center"
  },
  body: {
    flex: 1,
    backgroundColor: '#c6e2ff', 
    alignItems: 'center',
    //justifyContent: 'center',
    alignItems: 'center',
  },
  text:{
    color: '#000000',
    fontSize: 20,
    fontStyle: 'italic',
    justifyContent: 'center',
  },
  input: {
    width: 200,
    borderWidth: 1,
    borderColor: '#000000',
    borderRadius: 5,
    marginTop: 10,
  }

  // sectionContainer: {
  //   marginTop: 32,
  //   paddingHorizontal: 24,
  // },
  // sectionTitle: {
  //   fontSize: 24,
  //   fontWeight: '600',
  // },
  // sectionDescription: {
  //   marginTop: 8,
  //   fontSize: 18,
  //   fontWeight: '400',
  // },
  // highlight: {
  //   fontWeight: '700',
  // },
});

export default App;
