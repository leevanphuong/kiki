import catchAsync from "../../../../utils/catchAsync.js";
import { deleteCart } from "../../Service/Cart.js";
import status from 'http-status'
 const deleteCarts = catchAsync(async(req,res)=>{
   const bodyRequet={
      userId:req.userId,
      productId:req.body.productId
   }
   console.log(bodyRequet)
   await deleteCart(bodyRequet)
   return res.status(status.OK).json("xoá sản phẩm thành công")
 })
 export default deleteCarts
