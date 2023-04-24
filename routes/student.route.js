let mongoose = require("mongoose"),
    express = require("express"),
    router = express.Router();

// Student Model
let studentSchema = require("../models/Student");

// CREATE Student
router.post("/create-student", (req, res, next) => {
    studentSchema.create(req.body)
        .then((result) => {
            console.log(result);
            res.json(result);
        })
        .catch((error) => {
            return next(error);
        })
});

// READ Students
router.get("/", (req, res, next) => {
    console.log(req);
    studentSchema.find()
        .then(result => {
            console.log(result);
            res.json(result);
        })
        .catch((error) => {
            return next(error);
        })
});

// UPDATE student
router
    .route("/update-student/:id")
    // Get Single Student
    .get((req, res, next) => {
        studentSchema.findById(req.params.id)
            .then((result) => {
                res.json(result)
            })
            .catch((error) => {
                console.log(error);
            })
    })

    // Update Student Data
    .put((req, res, next) => {
        studentSchema.findByIdAndUpdate(
            req.params.id,
            {
                $set: req.body,
            },
            (error, data) => {
                if (error) {
                    return next(error);
                } else {
                    console.log("Student updated successfully !");
                    res.json(data);
                }
            }
        );
    });

// Delete Student
router.delete("/delete-student/:id",
    (req, res, next) => {
        studentSchema.findByIdAndRemove(req.params.id)
            .then((result) => {
                res.status(200).json({
                    msg: result,
                });
            })
            .catch((error) => {
                console.log(error);
            })
    });

module.exports = router;
