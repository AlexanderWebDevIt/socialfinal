const ADD_DIALOG = 'ADD-DIALOG'
const UPDATE_DIALOG_TEXT = 'UPDATE-DIALOG-TEXT';

let initialState = {
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
}

const DialogReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_DIALOG:
            let newDialog = {
                id: 9,
                message: state.textDialog
            }
            state.messagesData.push(newDialog)
            state.textDialog = ''
            return state
        case UPDATE_DIALOG_TEXT:
            state.textDialog = action.dialog
            return state
        default:
            return state
    }
};
export const addDialogAC = () => ({type: ADD_DIALOG})
export const updateDAC = (dialog) => ({type: UPDATE_DIALOG_TEXT,dialog})

export default DialogReducer;