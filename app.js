const bodyParser = require('body-parser')
const express = require('express')
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql')
const mongoose  = require('mongoose')
const cors = require('cors')

const Event = require('./models/event.js')

const app = express()

app.use(bodyParser.json());
app.use(cors());

app.use('/graphql', graphqlHTTP({
    schema: buildSchema(`
        type Event {
            _id: ID!
            title: String!
            description: String!
            price: Float!
            date: String!
        }

        input EventInput {
            title: String!
            description: String!
            price: Float!
            date: String!
        }

        type RootQuery {
            events: [Event!]!
        }
        
        type RootMutation {
            createEvent(eventInput: EventInput): Event
            updateEvent(id: ID!, eventInput: EventInput): Event
            deleteEvent(id: ID!): Boolean
        }

        schema {
            query: RootQuery
            mutation: RootMutation
        }
    `),
    rootValue: {
        events: async () => {
            try {
                const events = await Event.find();
                return events.map(event => {
                    // return { ...event._doc };
                    return { ...event.toJSON() };
                });
            } catch (err) {
                throw err;
            }
        },
        createEvent: async (args) => {

            const event = new Event ({
                title: args.eventInput.title,
                description: args.eventInput.description,
                price: args.eventInput.price,
                date: args.eventInput.date
            })
            try {
                const result = await event
                    .save();
                return { ...result._doc };
            } catch (err) {
                throw err;
            }
        },
        updateEvent: async ({ id, eventInput }) => {
            try {
                const event = await Event.findByIdAndUpdate(id, eventInput, { new: true });
                return { ...event._doc };
            } catch (err) {
                throw err;
            }
        },
        deleteEvent: async ({ id }) => {
            try {
                await Event.findByIdAndDelete(id);
                return true;
            } catch (err) {
                throw err;
            }
        }
    },
    graphiql: true
}))

mongoose.connect('mongodb://127.0.0.1:27017/graphqleai', { useNewUrlParser: true })
    .then(() => {
        app.listen(3000);
    })
    .catch(err => {
        console.log(err);
    });
