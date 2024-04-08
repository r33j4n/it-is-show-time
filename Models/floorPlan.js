import { Schema, model } from 'mongoose';

const floorPlanSchema = new Schema({
  floor_plan_id: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  event_id: {
    type: Schema.Types.ObjectId,
    ref: 'Event',
    required: true,
  },
  floor_plan_image: {
    type: String,
    required: true,
  },
});

export default model('FloorPlan', floorPlanSchema);
