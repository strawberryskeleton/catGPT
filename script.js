
const chatArea = document.getElementById('chat-area')
const inputForm = document.getElementById('input-form')
const userQueryField = document.getElementById('user-query-field')
const sendBtn = document.getElementById('send-btn')
const suggestionCards = document.querySelectorAll('.card')
const suggestBlocks = document.getElementById('suggest-blocks')

// sendBtn.addEventListener('click', () => {
//     addQuery()
//     // processQuery()
//     // displayReply()
// })

inputForm.addEventListener('submit', (e) => {
    e.preventDefault()

    displayQuery()
    // createReplyContent()
    displayReply()
})


function displayQuery () {
    suggestBlocks.classList.add('hidden')


    let userQuery = userQueryField.value
    // console.log(userQuery)

    if (!userQuery) return

    const queryDiv = document.createElement('div')
    queryDiv.classList.add('query')
    queryDiv.innerText = userQuery

    chatArea.appendChild(queryDiv)

    userQueryField.value = ''

    chatArea.scrollTop = chatArea.scrollHeight;
}


function createReplyContent () {
    let randomNum = Math.floor(Math.random() * 60)
    // console.log(randomNum)

    let messageContent = "Meow " + ('meow '.repeat(randomNum)) + "."

    return messageContent
}


function displayReply () {
    const replyDiv = document.createElement('div')
    replyDiv.classList.add('reply')

    replyDiv.innerHTML = `<div class="profile">{}</div>
    <div class="message">${createReplyContent()}</div>`

    chatArea.appendChild(replyDiv)

    chatArea.scrollTop = chatArea.scrollHeight;
}

// console.log(suggestionCards)

suggestionCards.forEach((card)=> {
    // console.log('here')
    card.addEventListener('click', () => {
        // console.log('herer')
        suggestBlocks.classList.add('hidden')
        // chatArea.classList.remove('hidden')

        let query = card.querySelector('p').innerText
        // console.log(query)
        
        userQueryField.value = query

        displayQuery()
        displayReply()
    })
})