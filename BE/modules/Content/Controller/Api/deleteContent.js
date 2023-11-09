import { deleteContent } from '../../Service/Category.js';
import status from 'http-status'
import catchAsync from "../../../../utils/catchAsync.js";
const deleteContents = catchAsync(async (req, res) => {
    const remove = await deleteContent(req)
    return res.status(status.OK).json(remove)
})
export default deleteContents