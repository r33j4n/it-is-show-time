import { Schema, model } from 'mongoose';

const seatSchema = new Schema({
  seat_id: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  event_id: {
    type: Schema.Types.ObjectId,
    ref: 'Event',
    required: true,
  },
  seat_number: {
    type: String,
    required: true,
  },
  seat_status: {
    type: String,
    required: true,
  },
});

export default model('Seat', seatSchema);
