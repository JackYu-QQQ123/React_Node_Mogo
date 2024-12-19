import express from "express";
import Hotel from "../models/Hotel.js";

const hotelsRoute = express.Router();


//create
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
//update
hotelsRoute.put("/:id", async (req, res) => {

  try {
    const updateHotel = await Hotel.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
    res.status(200).json(updateHotel);
  } catch (err) {
    console.error("Error saving hotel:", err);
    res.status(500).json(err);
  }
});
//delete
hotelsRoute.delete("/:id", async (req, res) => {

  try {
    const deleteHotel = await Hotel.findByIdAndDelete(req.params.id, { $set: req.body }, { new: true });
    res.status(200).json("delete success");
  } catch (err) {
    console.error("Error saving hotel:", err);
    res.status(500).json(err);
  }
});
//test get
hotelsRoute.get("/", async (req, res) => {

  try {
    const allHotels = await Hotel.find();
    res.status(200).json(allHotels);
  } catch (err) {
    console.error("Error fetching hotels:", err);
    res.status(500).json(err);
  }
});


export default hotelsRoute;
