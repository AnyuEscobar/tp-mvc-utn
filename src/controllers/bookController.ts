import { Request, Response } from "express";
import Book from "../model/BookModel";
import { error } from "console";

class BookController {
  static getAllBooks = async (req: Request, res: Response): Promise<void | Response> => {
    try {
      const books = await Book.find()
      res.json({ success: true, data: books })
    } catch (e) {
      res.status(500).json({ success: false, error: e.message })
    }

  }
}