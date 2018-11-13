import path from 'path';
import {Router} from 'express';

/* eslint-disable-next-line new-cap */
const router = Router();

/* GET index page. */
router.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../views/index.html'));
});

export default router;
