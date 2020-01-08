import mongoos from "mongoose"
const Schema = mongoos.Schema
const ObjectId = Schema.Types.ObjectId

let Note = new Schema({
  content: { type: String, required: true },
  bug: { type: ObjectId, ref: 'Bug', required: true },
  reportedBy: { type: String, required: true },
  flagged: { type: String, enum: ["pending", "completed", "rejected"] }
}, { timestamps: true, toJSON: { virtuals: true } })

export default Note