
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
    createReplyContent()
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


function createReplyContent () {
    let randomNum = Math.floor(Math.random() * 60)
    console.log(randomNum)

    let messageContent = "Meow" + ('meow' * randomNum) + "."

    return messageContent
}