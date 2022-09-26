# EC463 Mini-project Report

Author: Prithika Ganesh; Yihe Bi

Date: 2022-09-25

For our project, as both Prithika and Yihe are new to app devlopment, APIs, and firebase, we decided that we would follow the recommended approach
of implementing the application through React Native. This would provide a sufficient challenge for ourselves, as well as possible guidance as we
grapple with this process for the first time. Prithika primarily worked on creating the UI, walking through the Hello World tutorials, learning 
about React Native and Andriod studios. She created a very basic UI that can take in a twitter handle as text. Yihe worked mostly on the backend. Based on flask and using twitter and botometer API, we are able get how likeley the user is a robot. Then we stored that data in a sql lite3 database so that user can check previous data without doing the search again.

We are currently passing data between frontend and backend using html files.
However, what we initially expected was connecting the front and backends using our onw REST API. We tried to pack data into a json files and pass it between frontend and backend, but it's not working smoothly as we expected.

We also tried but were unable to generate the SHA1 codes for the google authentification and firebase. We continuely got an error stating that the keystore was missing, desite the fact that the file did exist in the appropriate spot (see 
images folder). We tried generating the keys through the terminal, through andriod studios, and by following various tutorials. Prithika even 
attempted starting over and creating another app to see if there was a set up error, but ran into the same issues. Yihe then tried implemeting it from
his enviroment to see if t was possibly an enviroment mistake, but unfortunately ran into more errors.

Overall, this was a very thorough challenge and learning experience for both of us. We learned how to set up google fire base (https://console.firebase.google.com/u/0/project/twitterchecker-5cb4d/overview)
and learned to implment the twitter api locally. We however struggled with cross-platform front-backend integration.