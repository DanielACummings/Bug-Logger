import express from "express";
import bugsService from "../services/BugsService";
import notesService from "../services/NotesService";

export default class BugsController {
  constructor() {
    this.router = express
      .Router()
      .get("", this.getAll)
      .get('/:id', this.getById)
      .get('/:id/notes', this.getNotesOfBug)
      .post('', this.create)
      .put('/:id', this.edit)
      .delete('/:id', this.softDelete)
  }

  async getAll(req, res, next) {
    try {
      let data = await bugsService.getAll();
      return res.send(data);
    } catch (error) {
      next(error);
    }
  }
  async getById(req, res, next) {
    try {
      let data = await bugsService.getById(req.params.id)
      return res.send(data)
    } catch (error) {
      next(error)
    }
  }
  async getNotesOfBug(req, res, next) {
    try {
      let data = await notesService.getNotesOfBug(req.params.id)
      return res.send(data)
    } catch (error) {
      next(error)
    }
  }
  async create(req, res, next) {
    try {
      let data = await bugsService.create(req.body)
      return res.status(201).send(data)
    } catch (error) {
      next(error)
    }
  }
  async edit(req, res, next) {
    try {
      let data = await bugsService.edit(req.params.id, req.body)
      return res.send(data)
    } catch (error) {
      next(error)
    }
  }
  async softDelete(req, res, next) {
    try {
      let data = await bugsService.softDelete(req.params.id)
      return res.send(data)
    } catch (error) {
      next(error)
    }
  }
}
