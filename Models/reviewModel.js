import { Schema, model } from 'mongoose';

const reviewSchema = new Schema({
  review_id: {
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
  rating: {
    type: Number,
    required: true,
  },
  review_text: {
    type: String,
    required: true,
  },
  review_date: {
    type: Date,
    required: true,
  },
});

export default model('Review', reviewSchema);
