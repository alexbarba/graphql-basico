"use strict";

function errorHandler(error) {
	console.error(error);
	throw new Error("Fallo en la operaciÃ³n del servidor");
}

module.exports = errorHandler;
