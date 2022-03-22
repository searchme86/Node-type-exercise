import express from 'express';

import {
  watch,
  deleteVideo,
  upload,
  getEdit,
  postEdit,
} from '../controllers/videoController';

const videoRouter = express.Router();

videoRouter.route('/:id(\\d+)').get(watch);
videoRouter.route('/:id(\\d+)/edit').get(getEdit).post(postEdit);

export default videoRouter;
