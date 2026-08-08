
const chatArea = document.getElementById('chat-area')
const inputForm = document.getElementById('input-form')
const userQueryField = document.getElementById('user-query-field')
const sendBtn = document.getElementById('send-btn')

// sendBtn.addEventListener('click', () => {
//     addQuery()
//     // processQuery()
//     // displayReply()
// })

inputForm.addEventListener('submit', (e) => {
    e.preventDefault()

    displayQuery()
    // processQuery()
    // displayReplay()
})

function displayQuery () {
    let userQuery = userQueryField.value
    console.log(userQuery)

    if (!userQuery) return

    const queryDiv = document.createElement('div')
    queryDiv.classList.add('query')
    queryDiv.innerText = userQuery

    chatArea.appendChild(queryDiv)

    userQueryField.value = ''
}