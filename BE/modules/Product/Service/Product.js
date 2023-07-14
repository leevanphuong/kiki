import Product from "../Model/Product.js";
export const getOneproduct = async (req) => {
    const getOne = await Product.findById(req.params.id)
    return getOne
}
export const getAllProduct = async (req, res) => {
    const product = await Product.find()
    return product
}
export const deleteProduct = async (req) => {
    const remove = await Product.findByIdAndDelete(req.params.id)
    return remove
}
export const addProduct= async(req)=>{
    const fileImages=req.files
    const check = fileImages.flatMap((item)=>item.path)
    const products=await Product.create({
        ...req.body,
        images: check
    })
return products
}
export const updateProduct =async (req)=>{
    const id = req.params._id
    const fileImages=req.files
    const check = fileImages.flatMap((item)=>item.path)
    const update = await Product.updateOne({
         _id: id , 
         ...req.body,
         images: check,
    });
    return update
}
