"use strict";

const connectDb = require("./db");

module.exports = {
	createCourse: async (root, {input}) => {
		const defaults = {
			teacher: "",
			topic: ""
		};
		const newCourse = Object.assign(defaults, input);
		let db, course;
		try {
			db = await connectDb();
			course = await db.collection("courses").insertOne(newCourse);
			newCourse._id = course.insertedID;
		} catch (error) {
			console.error(error);
		}
		return newCourse;
	}
};
