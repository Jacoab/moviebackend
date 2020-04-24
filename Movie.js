var mongoose = require('mongoose');
var Schema = mongoose.Schema;

mongoose.Promise = global.Promise;

mongoose.connect(process.env.DB, { useNewUrlParser: true } );
mongoose.set('useCreateIndex', true);

var MovieSchema = new Schema({
    title: { type: String, required: true, index: { unique: true }},
    yearReleased: { type: Date, required: true },
    genre: { type: String, required: true, enum: ['Action', 'Adventure','Anime', 'Cartoon', 'Comedy', 'Drama', 'Horror', 'Mystery', ] },
    actors: { type: [{actorName: String, characterName: String}], required: true },
    imageURL: { type: String, required: true, index: { unique: false}}

});

module.exports = mongoose.model('Movie', MovieSchema);