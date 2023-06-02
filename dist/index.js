"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT;
const corsOptions = {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type', 'Authorization'],
};
app.use((0, cors_1.default)(corsOptions));
app.use(express_1.default.static('public'));
app.use(express_1.default.urlencoded({ extended: false }));
app.get('/', (req, res) => {
    res.sendFile('index.html', { root: 'public' });
});
app.get('/quotation', (req, res) => {
    try {
        const d = parseInt(req.query.d);
        if (!isNaN(d)) {
            const quote = giveQuot(d);
            res.json({ today: quote });
        }
        else {
            res.json({ msg: 'error' });
        }
    }
    catch (error) {
        res.json({ msg: 'error' });
    }
});
app.get('/gamePage', (req, res) => {
    // Implement your logic for /gamePage route
});
app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
const giveQuot = (num) => {
    const quotList = [
        'Magábol már nagyon elegem van mára!',
        'A kutya meg a macsek rúgja meg!',
        'Okoska most kuss!',
        'Nagyszájú barátunk, kuss!',
        'Tudják a teknős úgy lélegzik, mint ahogy a relé működik',
        'Egyszer én magam is olimpikon voltam',
        'A klán háborúban új világ érkezett! Végre lesz mivel eltöltsem az időm és a pénzem!',
        'Hol vagy Endre??',
        'Hoppá! Hoppá! Elfelejtetted levédeni a telnet portod!',
        'Képzelje véget ért a Klánháboruban a 69-es világ',
        'Ne is tudják milyen csúnyán beszél a lányom LOL-ozás közben',
    ];
    return quotList[num];
};
