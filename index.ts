import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

const corsOptions = {
  allowedHeaders: ['Content-Type', 'Authorization'],
};

app.use(cors(corsOptions));
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));

app.get('/', (req: Request, res: Response) => {
  res.sendFile('index.html', { root: 'public' });
});

app.get('/quotation', (req: Request, res: Response) => {
  try {
    const d = parseInt(req.query.d as string);
    if (!isNaN(d)) {
      const quote = giveQuot(d);
      res.json({ today: quote });
    } else {
      res.json({ msg: 'error' });
    }
  } catch (error) {
    res.json({ msg: 'error' });
  }
});

app.get('/gamePage', (req: Request, res: Response) => {
  // Implement your logic for /gamePage route
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});

const giveQuot = (num: number): string => {
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
