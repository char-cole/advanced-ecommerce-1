let mongoose = require("mongoose");

const schema = new mongoose.Schema({
    name: {
        required: true,
        type: String
    },
    description: {
        required: true,
        type: String
    }
});

// schema allow data with any keys to be retrieved; it only matters when adding data

module.exports = mongoose.model("Product", schema);
// mongoose converts "Contact" to "contacts" !!
// does mongoose know how to convert all plurals? who the fuck knows~