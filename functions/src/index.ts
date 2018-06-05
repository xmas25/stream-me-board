import * as functions from 'firebase-functions'
import * as admin from 'firebase-admin'

admin.initializeApp()
const firestore = admin.firestore()

// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions

export const schedule = functions.https.onRequest(async (request, response) => {
	// Remove inactive user
	const doc = await firestore.doc('activity/onlineUsers').get()
	const idsToRemove = {}
	for (const i in doc.data())
		if (new Date().getTime() - doc.data()[i].getTime() > 60000)
			idsToRemove[i] = admin.firestore.FieldValue.delete()
	if (Object.keys(idsToRemove).length > 0)
		await firestore.doc('activity/onlineUsers').update(idsToRemove)

	// update last executed
	await firestore.doc('system/schedule').set({
		lastExecuted: new Date()
	})
	response.send('Done.')
})
