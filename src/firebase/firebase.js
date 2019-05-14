import * as firebase from 'firebase';

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket:process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
  };

  firebase.initializeApp(config);

  const database = firebase.database();

  export { firebase, database as default};

  // database.ref('expenses').push({
  //   description : 'Rent',
  //   note : 'Rent for house',
  //   amount : '12000',
  //   createdAt: '1000'
  // });

  // database.ref('expenses')
  // .once('value')
  // .then((snapshot) => {
  //   const expenses = [];
  //   snapshot.forEach((childSnapshot) => {
  //     expenses.push({
  //       id : childSnapshot.key,
  //       ...childSnapshot.val()
  //     })
  //   })
  //   console.log(expenses);
  // });

  // database.ref('expenses').on('value',(snapshot) => {
  //   const expenses = [];
  //   snapshot.forEach((childSnapshot) => {
  //     expenses.push({
  //       id : childSnapshot.key,
  //       ...childSnapshot.val()
  //     })
  //   })
  //   console.log(expenses);
  // });
//  database.ref('expenses').on('child_changed',(snapshot) => {
//   console.log(snapshot.key,snapshot.val());
//  })

  // database.ref('notes').push({
  //   title : 'Course topics',
  //   body : 'React, Angular'
  // });
//database.ref('notes/-LejluNzsA8hZvpgP_9j').remove();
  // const notes = [{
  //   id : '1',
  //   title : 'First note',
  //   body : 'THis is my note'
  // },  {
  //   id : '2',
  //   title : 'Second note',
  //   body : 'THis is my note'
  // }];
  // database.ref('notes').set(notes);
  //  database.ref().set({
  //   name : 'Anu Rastogi',
  //   age : 38,
  //   stressLevel :6,
  //   job : {
  //     title : 'Software Developer',
  //     company : 'Google'
  //   },
  //   location : {
  //       city : 'Mumbai',
  //       country : 'India'
  //   }
    
  // }).then(()=>{
  //   console.log("Data is saved");
  // }).catch((error) => {
  //   console.log('Error:', error);
  // })

  // database.ref().on('value',(snapshot) => {
  //   console.log(`${snapshot.val().name} is a ${snapshot.val().job.title} at ${snapshot.val().job.company}`);
  // })

  // setTimeout(()=>{
  //   database.ref().update({
  //   name : 'Gargi'
  // })}, 2000);

  // database.ref()
  //   .once('value')
  //   .then((snapshot)=>{
  //     const val = snapshot.val();
  //     console.log(val);
  //   }).catch((e)=>{
  //     console.log("Error fetching data",e);
  //   })

 

  // database.ref('isSingle').remove().then(()=>{
  //   console.log("Data removed");
  // }).catch((e) => {
  //   console.log("Error thrown->", e);
  // })

  // database.ref().update({
  //  stressLevel : 9,
  //  'job/company':'Amazon',
  //  'location/city' : 'Seattle'
  // });
