import express from 'express';
import type { Request, Response } from 'express';

//Define a route and a route handler.
const app = express();
const port = process.env.PORT || 3000; 

app.get('/', (req: Request, res:Response) => {
    res.send('Thank you Monti!!!');
}); 

//Start the webserver
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});