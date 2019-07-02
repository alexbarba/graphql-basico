"use strict";

const connectDb = require("./db");
const {ObjectID} = require("mongodb");

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
			newCourse._id = course.insertedId;
		} catch (error) {
			console.error(error);
		}
		return newCourse;
	},
	editCourse: async (root, {_id, input}) => {
		let db, course;
		try {
			db = await connectDb();

			await db
				.collection("courses")
				.updateOne({_id: ObjectID(_id)}, {$set: input});
			course = await db.collection("courses").findOne({_id: ObjectID(_id)});
		} catch (error) {
			console.error(error);
		}
		return course;
	},
	deleteCourse: async (root, {_id}) => {
		let db, course;
		try {
			db = await connectDb();
			course = await db.collection("courses").findOne({_id: ObjectID(_id)});
			await db
				.collection("courses")
				.removeOne({_id: ObjectID(_id)}, function(err, obj) {
					if (err) throw err;
					console.log(obj.result.n + " record(s) deleted");
				});
		} catch (error) {
			console.error(error);
		}

		return course;
	},
	createStudent: async (root, {input}) => {
		const defaults = {
			email: ""
		};
		const newStudent = Object.assign(defaults, input);
		let db, student;
		try {
			db = await connectDb();
			student = await db.collection("students").insertOne(newStudent);
			newStudent._id = student.insertedId;
		} catch (error) {
			console.error(error);
		}
		return newStudent;
	},
	editStudent: async (root, {_id, input}) => {
		let db, student;
		try {
			db = await connectDb();

			await db
				.collection("students")
				.updateOne({_id: ObjectID(_id)}, {$set: input});
			student = await db.collection("students").findOne({_id: ObjectID(_id)});
		} catch (error) {
			console.error(error);
		}

		return student;
	},
	deleteStudent: async (root, {_id}) => {
		let db, student;
		try {
			db = await connectDb();
			student = await db.collection("students").findOne({_id: ObjectID(_id)});
			await db
				.collection("students")
				.removeOne({_id: ObjectID(_id)}, function(err, obj) {
					if (err) throw err;
					console.log(obj.result.n + " record(s) deleted");
				});
		} catch (error) {
			console.error(error);
		}

		return student;
	}
};
