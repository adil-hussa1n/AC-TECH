const router = require("express").Router()
const {
  Intro,
  About,

  Contact,

  Course,
} = require("../models/portfolioModel")
const User = require("../models/userModel")
// get all portfolio data
router.get("/get-portfolio-data", async (req, res) => {
  try {
    const intros = await Intro.find()
    const abouts = await About.find()

    const contacts = await Contact.find()

    const courses = await Course.find()

    res.status(200).send({
      intros: intros[0],
      abouts: abouts[0],

      contacts: contacts[0],

      courses: courses,
    })
  } catch (error) {
    res.status(500).send(error)
  }
})

// update intro
router.post("/update-intros", async (req, res) => {
  try {
    const intros = await Intro.findOneAndUpdate(
      { _id: req.body._id },
      req.body,
      { new: true }
    )
    res.status(200).send({
      data: intros,
      success: true,
      message: "Intro updated successfully",
    })
  } catch (error) {
    res.status(500).send(error)
  }
})

// update about
router.post("/update-abouts", async (req, res) => {
  try {
    const abouts = await About.findOneAndUpdate(
      { _id: req.body._id },
      req.body,
      { new: true }
    )
    res.status(200).send({
      data: abouts,
      success: true,
      message: "Abouts updated successfully",
    })
  } catch (error) {
    res.status(500).send(error)
  }
})

// add course
router.post("/add-courses", async (req, res) => {
  try {
    const courses = new Course(req.body)
    await courses.save()
    res.status(200).send({
      data: courses,
      success: true,
      message: "Course added successfully",
    })
  } catch (error) {
    res.status(500).send(error)
  }
})

// update course
router.post("/update-courses", async (req, res) => {
  try {
    const courses = await Course.findOneAndUpdate(
      { _id: req.body._id },
      req.body,
      { new: true }
    )
    res.status(200).send({
      data: courses,
      success: true,
      message: "Course updated successfully",
    })
  } catch (error) {
    res.status(500).send(error)
  }
})

// delete course

router.post("/delete-courses", async (req, res) => {
  try {
    const courses = await Course.findOneAndDelete({ _id: req.body._id })
    res.status(200).send({
      data: courses,
      success: true,
      message: "Course deleted successfully",
    })
  } catch (error) {
    res.status(500).send(error)
  }
})

// update contact
router.post("/update-contacts", async (req, res) => {
  try {
    const contacts = await Contact.findOneAndUpdate(
      { _id: req.body._id },
      req.body,
      { new: true }
    )
    res.status(200).send({
      data: contacts,
      success: true,
      message: "Contact updated successfully",
    })
  } catch (error) {
    res.status(500).send(error)
  }
})

// admin login
router.post("/admin-login", async (req, res) => {
  try {
    const user = await User.findOne({
      username: req.body.username,
      password: req.body.password,
    })
    user.password = ""
    if (user) {
      res.status(200).send({
        data: user,
        success: true,
        message: "Login successfully",
      })
    } else {
      res.status(200).send({
        data: user,
        success: false,
        message: "Invalid username or password",
      })
    }
  } catch (error) {
    res.status(500).send(error)
  }
})
module.exports = router
