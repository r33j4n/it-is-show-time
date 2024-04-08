import { Schema, model } from 'mongoose';

const attendeeSchema = new Schema({
  attendee_id: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  attendee_name: {
    type: String,
    required: true,
  },
  phone_number: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
});

export default model('Attendee', attendeeSchema);
