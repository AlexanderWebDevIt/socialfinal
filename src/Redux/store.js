

let state =  {
    postData: [
        {id: 2, post: "Настроениен дерьмо, да и день такой же", likesCount: 12},
        {id: 3, post: "А у меня все нормально !!!", likesCount: 14},
        {id: 5, post: "Везет некоторым", likesCount: 10}
    ],
    dialogsData: [
        {id:2, name:"Дима :"},
        {id:3, name:"Саша :"},
        {id:4, name:"Юра :"},
        {id:5, name:"Игорь :"},
    ],
    messagesData: [
        {message: "Привет! как у тебя дела?", id: 2},
        {message: "Привет !! все нормально", id: 3},
        {message: "Я вчера на работе был", id: 4},
        {message: "Да ну её эту работу", id: 5},
    ]
}

export let addPost = (postBode) => {
    let newPost = {
        id: 6,
        message: postBode,
        likesCount: 0
    }
    state.postData.push(newPost)
}

export default state