"use strict";
const courses = [
	{
		_id: "yui",
		title: "Mi titulo",
		teacher: "Mi profesor",
		description: "una descripcion",
		topic: "programacion"
	},
	{
		_id: "anyid2",
		title: "Mi titulo2",
		teacher: "Mi profesor2",
		description: "una descripcion2",
		topic: "programacion2"
	},
	{
		_id: "anyid3",
		title: "Mi titulo3",
		teacher: "Mi profesor3",
		description: "una descripcion3",
		topic: "programacion3"
	}
];
module.exports = {
	Query: {
		getCourses: () => {
			return courses;
		},
		getCourse: (root, args) => {
			const course = courses.filter(course => course._id === args._id);
			return course.pop();
		}
	}
};
