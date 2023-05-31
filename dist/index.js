"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const path = require('path');
const app = (0, express_1.default)();
const port = process.env.PORT;
app.use(express_1.default.static(path.join(__dirname, '..', 'public')));
app.use(express_1.default.urlencoded({ extended: false }));
//req handeling
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});
app.get('/quotation', (req, res) => {
    try {
        const d = parseInt(req.query.d); // Cast req.query.d to string before parsing
        if (!isNaN(d)) {
            res.json(JSON.stringify({ today: giveQuot(d) }));
        }
        else {
            res.json({ msg: 'error' });
        }
    }
    catch (_a) {
        res.json({ msg: 'error' });
    }
});
app.get('/gamePage', (req, res) => {
});
//listener
app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
//Server funclea
let giveQuot = (num) => {
    let quot_list = ['A kutya meg a macsek rúgja meg!', 'Okoska most kuss!', 'Nagyszájú barátunk, kuss!', 'Tudják a teknős úgy lélegzik, mint ahogy a relé mükődik', 'Egyszer én magam is olimpikon voltam', 'A klán háborúban új világ érkezett! Végre lesz mivel eltöltsem az időm és a pénzem  !', 'Hol vagy Endre??', 'Hoppá! Hoppá! Elfelejtetted levédeni a telnet portod!', 'Képzelje véget ért a Klánháboruban a 69-es világ', 'Ne is tudják milyen csunyán beszél a lányom LOL-ozás közben'];
    return quot_list[num];
};
