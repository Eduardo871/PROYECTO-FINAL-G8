const { DataTypes, STRING } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
	// defino el modelo
	sequelize.define(
		"barber",
		{
			name: {
				type: DataTypes.STRING,
				allowNull: false,
			},
		lastname: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		email: {
			type: DataTypes.STRING,
			allowNull: false,
			unique: true,
		},
		image: {
			type: DataTypes.ARRAY(STRING), // Se puede ingresar un array de varias url
			allowNull: false,
			defaultValue: ["https://imagenurl"],
		},
		mobile: {
			type: DataTypes.STRING,
		},
		location: {
			type: DataTypes.STRING,
		},
		password: {
			type: DataTypes.STRING,
		},
		status: {
			type: DataTypes.BOOLEAN,
		},
		alias: {
			type: DataTypes.STRING,
		},
		resume: {
			type: DataTypes.STRING,
		},
		bio: {
			type: DataTypes.STRING,
		},
		rating: {
			type: DataTypes.FLOAT,
			allowNull: false,
		},
		type:{
			// se realizó la traducción de los ENUMs al inglés para los filtros
			type: DataTypes.ENUM("Urban", "Academy", "Hair technician", "Seminary"),
			allowNull: false,
			defaultValue: "Urban"
		},
		slots:{
			type: DataTypes.ARRAY(STRING),
			allowNull: false,
			defaultValue: ["09:00", "10:00", "11:00", "12:00"]
		}

	},{ timestamps: false })
};
