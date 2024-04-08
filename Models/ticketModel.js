import { Schema, model } from 'mongoose';

const ticketSchema = new Schema({
  ticket_id: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  event_id: {
    type: Schema.Types.ObjectId,
    ref: 'Event',
    required: true,
  },
  ticket_type: {
    type: String,
    required: true,
  },
  ticket_status: {
    type: String,
    required: true,
  },
  QR_code: {
    type: String,
    required: true,
  },
});

export default model('Ticket', ticketSchema);
