import { connect } from "mongoose"

const connectDB = async () => {
  const URI_DB = "mongodb://localhost:27017/db_mvc_utn"
  try {
    await connect(URI_DB)
    console.log("Conectado con éxito a Mongo DB")
  } catch (e) {
    console.log("Error al conectarse a MongoDB")
    process.exit(1)
  }
}

export default connectDB