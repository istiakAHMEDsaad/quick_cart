import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    _id: { type: String, require: true },
    name: { type: String, require: true },
    email: { type: String, require: true, unique: true },
    imageUrl: { type: String, require: true, unique: true },
    cartItems: { type: Object, default: {} },
  },
  { minimize: false }
);

const User = mongoose.models.user || mongoose.model('user', userSchema);

export default User;
/*
https://www.torrentbd.net/forums.php?action=viewtopic&topicid=76585
*/