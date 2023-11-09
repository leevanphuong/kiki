import Content from "../Model/Content.js";

export const getAllContent= async () => {
    const getAll = await Content.find()
    return getAll
}
export const deleteContent= async (req) => {
    const remove = await Content.findByIdAndDelete(req.params.id)
    return remove
}
export const addContent= async (req) => {
    const contents = await Content.create({
        ...req.body
    })
    return contents
}

export const updateContent= async (req) => {
    const id = req.params.id
    const updateContent = await Content.updateOne({
        _id: id
    },
        {
            ...req.body
        }
    )
    return updateContent
}
