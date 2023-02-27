import express from "express";
import cors from "cors";
import { Products, Categories } from "./database.js";
import parser from "body-parser";

const app = express();
const { json, urlencoded } = parser;

app.use(cors());
app.use(json());
app.use(urlencoded({ extended: false }));

// (async () => {
//     await Categories.sync({ alter: true });
//     await Products.sync({ alter: true });
// })();

app.get("/home", async (req, res) => {
    if (req.query.limit) {
        try {
            const statement = await Categories.findAll({
                limit: Number(req.query.limit)
            });
            res.send(statement);
        } catch (e) {
            res.send(e);
        }
    } else {
        try {
            const statement = await Categories.findAll();
            res.send(statement);
        } catch (e) {
            res.send(e);
        }
    }
});


app.post("/home", async (req, res) => {
    try {
        const statement = await Categories.create({
            name: req.body.name,
            status: req.body.status
        });
        res.send(statement);
    } catch (e) {
        res.send(e);
    }
});

app.listen(3000, () => {
    console.log("http://localhost:3000");
});