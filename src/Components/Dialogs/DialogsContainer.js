import {addDialogAC, updateDAC} from "../../Redux/DialogReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";


const mapStateToProps = (state) => {
    return {
        state: state.DialogReducer
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onChengDialogs: (dialog) => { dispatch(updateDAC(dialog)) },
        addDialog: () => { dispatch(addDialogAC()) }
    }
}
const DialogsContainer = connect (mapStateToProps,mapDispatchToProps) (Dialogs)
export default DialogsContainer;
