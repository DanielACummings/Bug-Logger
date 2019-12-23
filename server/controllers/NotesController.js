import express from 'express'
import notesService from '../services/NotesService'

export default class NotesController {
  constructor() {
    this.router = express
      .Router()
      .get('', this.getById)
      .post('', this.create)
  }

  async getById(req, res, next) {
    try {
      let data = await notesService.getById(req.params.id)
      return res.send(data)
    } catch (error) {
      next(error)
    }
  }
  async create() {

  }
}