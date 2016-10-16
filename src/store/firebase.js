import Firebase from 'firebase'

import config from '../../config/'

// TODO: find a better solution for this
/* Maybe this can help
 firebase.app().delete().then(function() {
                console.log("[DEFAULT] App is Gone Now");
            });
 */
const firebaseApp = Firebase.initializeApp(config.dev.firebase, `app_${Date.now()}`)
const db = firebaseApp.database()

export function fetch (child) {
  return new Promise((resolve, reject) => {
    db.ref(`notes/${child}`).once('value', snapshot => {
      const val = snapshot.val()
      resolve(val)
    }, reject)
  })
}

export function set (child, value) {
  db.ref(`notes/${child}`).set(value)
}

