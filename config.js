import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';


// Import all database schemas from the Models folder
import Seat from './Models/seatModel.js';
import Event from './Models/eventModel.js';
import Ticket from './Models/ticketModel.js';
import FloorPlan from './Models/floorPlan.js';
import Registration from './Models/registrationModel.js';
import Attendee from './Models/attendeeModel.js';
import Checkin from './Models/checkInModel.js';
import Review from './Models/reviewModel.js';



const app = express();
const port = 5002;

app.use(cors());
app.use(bodyParser.json());

//create a connection with the database
mongoose.connect("mongodb://localhost:27017/itsShowTime", {
    useNewUrlParser: true,
});
const db = mongoose.connection;;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('Connected to the database');
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });

// Create a new event
app.post('/createEvent', (req, res) => {
    const newEvent = new Event({
        event_id: new mongoose.Types.ObjectId(),
        event_name: req.body.event_name,
        event_date: req.body.event_date,
        event_location: req.body.event_location,
        ticket_price: req.body.ticket_price,
    });
    newEvent.save()
    .then((result) => {
        res.send(result);
    })
    .catch((err) => {
        res.send(err);
    });
});


// Get all events
app.get('/getEvents', (req, res) => {
    Event.find()
    .then((result) => {
        res.send(result);
    })
    .catch((err) => {
        res.send(err);
    });
});

// Get event by id
app.get('/getEventById/:id', (req, res) => {
    Event.findById(req.params.id)
    .then((result) => {
        res.send(result);
    })
    .catch((err) => {
        res.send(err);
    });
});

// Update event by id
app.put('/updateEvent/:id', (req, res) => {
    Event.findByIdAndUpdate
    (req.params.id, {
        event_name: req.body.event_name,
        event_date: req.body.event_date,
        event_location: req.body.event_location,
        event_description: req.body.event_description,
        event_image: req.body.event_image,
    })
    .then((result) => {
        res.send(result);
    })
    .catch((err) => {
        res.send(err);
    });
}
);

// Delete event by id
app.delete('/deleteEvent/:id', (req, res) => {
    Event.findByIdAndDelete(req.params.id)
    .then((result) => {
        res.send(result);
    })
    .catch((err) => {
        res.send(err);
    });
});

// Review Related APIs
//Create a new Review
app.post('/createReview', (req, res) => {
    const newReview = new Review({
        review_id: new mongoose.Types.ObjectId(),
        event_id: req.body.event_id,
        attendee_id: req.body.attendee_id,
        rating: req.body.rating,
        review_text: req.body.review_text,
        review_date: req.body.review_date,
    });
    newReview.save()
    .then((result) => {
        res.send(result);
    })
    .catch((err) => {
        res.send(err);
    });
});

// Get all reviews
app.get('/getReviews', (req, res) => {
    Review.find()
    .then((result) => {
        res.send(result);
    })
    .catch((err) => {
        res.send(err);
    });
});

// Get review by id
app.get('/getReviewById/:id', (req,
    res) => {
    Review.findById(req.params.id)
    .then((result) => {
        res.send(result);
    })
    .catch((err) => {
        res.send(err);
    });
}
);

// Update review by id
app.put('/updateReview/:id', (req, res) => {
    Review.findByIdAndUpdate
    (req.params.id, {
        event_id: req.body.event_id,
        attendee_id: req.body.attendee_id,
        rating: req.body.rating,
        review_text: req.body.review_text,
        review_date: req.body.review_date,
    })
    .then((result) => {
        res.send(result);
    })
    .catch((err) => {
        res.send(err);
    });
}
);

// Delete review by id
app.delete('/deleteReview/:id', (req, res) => {
    Review.findByIdAndDelete(req.params.id)
    .then((result) => {
        res.send(result);
    })
    .catch((err) => {
        res.send(err);
    });
});

//creat a variable called review_attenddee_id and create a rest api to check the review by the attendee id and retuen the booolean value
app.get('/checkReviewByAttendeeId/:id', (req, res) => {
    Review.find({ attendee_id: req.params.id })
    .then((result) => {
        res.send(result.length > 0);
    })
    .catch((err) => {
        res.send(err);
    });
});

 