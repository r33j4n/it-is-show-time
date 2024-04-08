import { Schema, model } from 'mongoose';

const analyticsSchema = new Schema({
  analytics_id: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  event_id: {
    type: Schema.Types.ObjectId,
    ref: 'Event',
    required: true,
  },
  tickets_sold: {
    type: Number,
    required: true,
  },
  revenue_generated: {
    type: Number,
    required: true,
  },
  checkins_count: {
    type: Number,
    required: true,
  },
});

export default model('Analytics', analyticsSchema);
