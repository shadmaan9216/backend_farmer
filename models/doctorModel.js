import mongoose from "mongoose"

const reviewSchema = mongoose.Schema(
    {
        name: { type: String },
        rating: { type: Number },
        comment: { type: String },
        user: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "Farmer"
        },
    },
    {
        timestamps: true,
    }
);

const doctorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: Number,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    experience: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        default: 0,
    },
    reviews: [reviewSchema],
    numReviews: {
        type: Number,
        default: 0,
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    connected: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Farmer",
            required: true,
        },
    ]
},
    {
        timestamps: true,
    });

const Doctor = mongoose.model("Doctor", doctorSchema);

export default Doctor;