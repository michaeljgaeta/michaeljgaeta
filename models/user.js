"use strict";

const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },
    email: {
      type: String,
      required: true,
      lowercase: true,
      trim: true
    },
    passwordHash: {
      type: String,
      required: true
    },
    location: {
      type: String
    },
    picture: {
      type: String
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("User", userSchema);
