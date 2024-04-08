import { Schema, model } from 'mongoose';

const eventSchema = new Schema({
  event_id: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  event_name: {
    type: String,
    required: true,
  },
  event_date: {
    type: Date,
    required: true,
  },
  event_location: {
    type: String,
    required: true,
  },
  ticket_price: {
    type: Number,
    required: true,
  },
});

export default model('Event', eventSchema);