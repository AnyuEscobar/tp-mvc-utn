import { Request, Response } from "express"
import bcrypt from "bcryptjs"
import User from "../model/UserModel"

const SECRET_KEY = 1234

class AuthController {
  static register = async (req: Request, res: Response): Promise<void | Response> => {
    try {
      const { email, password } = req.body
      if (!email || !password) {
        return res.status(400).json({ success: false, error: "Por favor completar los campos requeridos" })
      }
      const hash = await bcrypt.hash(password, 10)
      const newUser = new User({ email, password: hash })

      await newUser.save()
      res.status(200).json({ success: true, data: newUser })

    } catch (e) {
      const error = e as Error
      return res.status(409).json({ success: false, error: "Usuario ya registrado en nuestro servidor" })

    }
  }
  static login = async (req: Request, res: Response): Promise<void | Response> => {
    try {

    } catch (error) {

    }
  }
}
