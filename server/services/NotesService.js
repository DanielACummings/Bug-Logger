import mongoose from "mongoose"
import Note from "../models/Note"
import ApiError from '../utils/ApiError'

const _repository = mongoose.model("Note", Note)

class NotesService {
  async getById(id) {
    let data = await _repository.findById(id)
    if (!data) {
      throw new ApiError('Invalid ID', 400)
    }
    return data
  }
  async getAll() {
    return await _repository.find({})
  }
  async getNotesOfBug(id) {
    let data = await _repository.find({ bug: id })
    return data
  }
  async create(reqBody) {
    let data = await _repository.create(reqBody)
    return data
  }
  async edit(id, update) {
    let data = await _repository.findOneAndUpdate({ _id: id }, update, { new: true })
    return data
  }
  async delete(id) {
    let data = await _repository.findOneAndDelete({ _id: id })
    return data
  }
}

const notesService = new NotesService()
export default notesService