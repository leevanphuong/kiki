import getAllContents from "./Api/getAllContent.js"
import deleteContents from "./Api/deleteContent.js"
import addContents from "./Api/addContent.js"
import updateContents from "./Api/updateContent.js"
const contentController = {
    getAllContents,
    deleteContents,
    addContents,
    updateContents
}
export default contentController