import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';

dotenv.config();

const path = require('path')
const app: Express = express();
const port = process.env.PORT;

app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(express.urlencoded({ extended: false }));

//req handeling

app.get('/', (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'index.html'))
});

app.get('/quotation', (req: Request, res: Response) => {
  try {
    const d = parseInt(req.query.d as string); // Cast req.query.d to string before parsing
    if (!isNaN(d)) {
      res.json(JSON.stringify({ today: giveQuot(d) }));
    } else {
      res.json({ msg: 'error' });
    }
  } catch {
    res.json({ msg: 'error' });
  }
})

app.get('/gamePage', (req: Request, res: Response) =>{
})

//listener

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});

//Server funclea
let giveQuot = (num: number) =>{
  let quot_list = ['A kutya meg a macsek rúgja meg!', 'Okoska most kuss!', 'Nagyszájú barátunk, kuss!', 'Tudják a teknős úgy lélegzik, mint ahogy a relé mükődik', 'Egyszer én magam is olimpikon voltam', 'A klán háborúban új világ érkezett! Végre lesz mivel eltöltsem az időm és a pénzem  !', 'Hol vagy Endre??', 'Hoppá! Hoppá! Elfelejtetted levédeni a telnet portod!', 'Képzelje véget ért a Klánháboruban a 69-es világ', 'Ne is tudják milyen csunyán beszél a lányom LOL-ozás közben']
  return quot_list[num]
}
