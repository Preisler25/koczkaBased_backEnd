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

//listener

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});

//Server func
let giveQuot = (num: number) =>{
  let quot_list = ['A kutya meg a macsek rugja meg!', 'Okoska most kuss!', 'Nagyszájú barátunk, kuss!', 'Tudják a teknős ugy lélegzik, mint ahogy a relay mükődik', 'Egyszer én magam is olimpikon voltam', 'A klán háboruban új világ érkezet! Végre lesz mivel eltöltsem az időm!', 'Hol vagy Endre??', 'Hoppá! Hoppá! Elfelejtetted levédeni a telnet portod!', 'Képzelje véget ért a Klánháboruban a 69-es világ', 'Ne is tudják milyen csunyán beszél a lányom LOL-ozás közben']
  return quot_list[num]
}