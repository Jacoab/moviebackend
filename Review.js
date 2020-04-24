var mongoose = require('mongoose');
var Schema = mongoose.Schema;

mongoose.Promise = global.Promise;

mongoose.connect(process.env.DB, { useNewUrlParser: true } );
mongoose.set('useCreateIndex', true);

var reviewSchema = new Schema({
    title: { type: String, required: true },
    reviewerName: { type: String, required: true},
    quote: { type: String, required: true },
    rateing: { type: Number, required: true }
});

module.exports = mongoose.model('Review', reviewSchema);