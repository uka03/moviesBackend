import mongoose from "mongoose";

mongoose.connect(
    "mongodb+srv://uka03:Mongol0318@uka03.pt2x6rc.mongodb.net/sample_mflix?retryWrites=true&w=majority"
)


export default mongoose.connection