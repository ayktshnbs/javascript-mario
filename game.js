const { Client, Account, Databases, ID, Query } = Appwrite
const projectId = '67f26e8a001ff5ee4d2d'
const databaseId =''
const collectionId = ''

const client = new Client()
    .setEndpoint('http://cloud.appwrite.com/v1')
    .setProject(projectId)

const account = new Account(client)

function register (event) {
    account.create(
        ID.unique(),
        event.target.elements ['register-email'].value,
        event.target.elements ['register-password'].value,
        event.target.elements ['register-username'].value,
    ),then(response => {
        console.log(response)
    })
}