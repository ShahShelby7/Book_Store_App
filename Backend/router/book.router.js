import { Router } from "express";
import getBook from "../controller/book.controller.js";

const router = Router();

router.get("/", getBook);  //this api get request

export default router;