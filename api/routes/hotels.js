import express from "express";
import Hotel from "../models/Hotel.js";

const hotelsRoute = express.Router();

hotelsRoute.post("/", async (req, res) => {
  const newHotel = new Hotel(req.body);
  console.log("newHotel:", newHotel);

  try {
    const savedHotel = await newHotel.save();
    res.status(200).json(savedHotel);
  } catch (err) {
    console.error("Error saving hotel:", err);
    res.status(500).json(err);
  }
});

export default hotelsRoute;
