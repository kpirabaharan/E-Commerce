import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    dateOfBirth: { type: Date, required: true },
    phoneNumber: {
      type: Number,
      required: true,
      unique: true,
    },
    email: { type: String, required: true, unique: true, max: 50 },
    password: { type: String, required: true, min: 5 },
    items: [
      {
        productId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Product',
          required: true,
        },
        quantity: { type: Number, required: true },
      },
    ],
  },
  { timestamps: true },
);

const User = mongoose.model('User', UserSchema);

export default User;
