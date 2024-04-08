import { Schema, model } from 'mongoose';

const registrationSchema = new Schema({
  registration_id: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  event_id: {
    type: Schema.Types.ObjectId,
    ref: 'Event',
    required: true,
  },
  attendee_id: {
    type: Schema.Types.ObjectId,
    ref: 'Attendee',
    required: true,
  },
  registration_date: {
    type: Date,
    required: true,
  },
});

export default model('Registration', registrationSchema);
