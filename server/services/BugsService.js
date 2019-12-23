import mongoose from "mongoose";
import Bug from "../models/Bug";
import ApiError from "../utils/ApiError";

const _repository = mongoose.model("Bug", Bug);

class BugsService {
  async getAll() {
    return await _repository.find({});
  }
  async getById(id) {
    let data = await _repository.findById(id)
    if (!data) {
      throw new ApiError('Invalid ID', 400)
    }
    return data
  }
  async create(rawData) {
    let data = await _repository.create(rawData);
    return data
  }
  async checkById(id) {
    let data = await _repository.findById({ _id: id })
    return data
  }
  async edit(id, update) {
    let dataCheck = await _repository.findById({ _id: id })
    console.log(dataCheck);

    if (dataCheck.closed == true) {
      let data = await _repository.findOneAndUpdate({ _id: id }, update, { new: true })
      if (!data) {
        throw new ApiError('Invalid ID', 400)
      }
      return data
    } else {
      return new Error('Bugs cannot be edited after being closed.')
    }
  }

  async softDelete(id) {
    let data = await _repository.findOneAndUpdate({ _id: id }, { closed: true })
    if (!data) {
      throw new ApiError('Invalid ID', 400)
    }
    return data
  }
}

const bugsService = new BugsService();
export default bugsService;
