"use strict";
const courses = [
	{
		_id: "anyid",
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
	getCourses: () => {
		return courses;
	}
};
