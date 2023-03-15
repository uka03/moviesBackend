import mongoose from 'mongoose'
import '../config/config.js'

let movieSchema = new mongoose.Schema({


}, {
    collection: 'movies'
})

const movie = mongoose.model('movie', movieSchema, 'movies');
export default movie;