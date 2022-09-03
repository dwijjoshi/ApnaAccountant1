const mongoose = require("mongoose");

//yc2bmMcxhoPY08xI
//mongodb+srv://me:yc2bmMcxhoPY08xI@apnaaccountant.uhyr6du.mongodb.net/?retryWrites=true&w=majority
const dbConnect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log("DB connected Successfully");
  } catch (error) {
    console.log(`Error ${error.message}`);
  }
};

module.exports = dbConnect;
