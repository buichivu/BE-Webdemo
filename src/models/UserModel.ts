import mongoose, { Schema } from "mongoose";

const UserScheme = new Schema({
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
  rule: {
		type: Number,
		default: 1,
	},
  creatAt: {
    type: Date,
    default: Date.now(),
  },
  updateAt: {
    type: Date,
    default: Date.now(),
  },
});

const UserModel = mongoose.model("user", UserScheme);
export default UserModel;
