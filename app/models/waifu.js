module.exports = mongoose => {
    // waifu schema
    const schema = mongoose.Schema(
    {
        name: String,
        gender: String,
        family: String,
        power: String,
        anime: String,
        release: Date,
    }, 
        {
            timestamps: true
        }
    );

    schema.method("toJSON", function(){
        const {__v, __id, ...object} = this.toObject();
        object.id = __id;

        return object;
    });

    return mongoose.model("waifu", schema);
}