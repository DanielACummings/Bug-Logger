import mongoose from 'mongoose'
import Note from '../models/Note'
import ApiError from '../utils/ApiError'

const _repository = mongoose.model('Note', Note)

class NotesService {
  async getById(id) {
    let data = await _repository.findById(id)
    if (!data) {
      throw new ApiError('Invalid ID', 400)
    }
  }
}

const notesService = new NotesService()
export default notesService