import { Schema, model } from 'mongoose';

const checkinSchema = new Schema({
  checkin_id: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  registration_id: {
    type: Schema.Types.ObjectId,
    ref: 'Registration',
    required: true,
  },
  checkin_date: {
    type: Date,
    required: true,
  },
});

export default model('Checkin', checkinSchema);
