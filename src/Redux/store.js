
const ADD_DIALOG = 'ADD-DIALOG'
const UPDATE_DIALOG_TEXT = 'UPDATE-DIALOG-TEXT';
const ADD_POST = 'ADD-POST';
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';

let store = {
    _state: {
        postData: [
            {id: 2, post: "Настроениен дерьмо, да и день такой же", likesCount: 12},
            {id: 3, post: "А у меня все нормально !!!", likesCount: 14},
            {id: 5, post: "Везет некоторым", likesCount: 10}
        ],
        newPostText: '',
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
        ],
        textDialog: ''
    },
    getState () {return this._state},
    _callSubscriber () {},
    subscribe  (observer)  {
        this._callSubscriber = observer
    },
    dispatch (action) {
        if (action.type === ADD_POST) {
            let newPost = {
                id: 6,
                post: this._state.newPostText ,
                likesCount: 0
            }
            this._state.postData.push(newPost)
            this._state.newPostText = '';
            this._callSubscriber(this._state)
        } else if (action.type === UPDATE_POST_TEXT) {
            this._state.newPostText = action.newText;
            this._callSubscriber(this._state)
        }
        if (action.type === ADD_DIALOG) {
            let newDialog = {
                id: 9,
                message: this._state.textDialog
            }
            this._state.messagesData.push(newDialog)
            this._state.textDialog = ''
            this._callSubscriber(this._state)
        }
        if (action.type === UPDATE_DIALOG_TEXT) {
            this._state.textDialog = action.dialog
            this._callSubscriber(this._state)
        }
    },
}

export const addDialogAC = () => ({type: ADD_DIALOG})
export const updateDAC = (dialog) => ({type: UPDATE_DIALOG_TEXT,dialog})
export const addPostAC = () => ({type: ADD_POST})
export const updatePAC = (newText) => ({type:UPDATE_POST_TEXT,newText})

export default store