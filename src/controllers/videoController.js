import Video from '../models/Video';

export const home = async (req, res) => {
  Video.find({}, (error, videos) => {
    console.log('videos', videos);
    return res.render('home', { pageTitle: 'Home', videos });
  });
};

export const watch = (req, res) => {
  const { id } = req.params;
  return res.render('watch', {
    pageTitle: `Watching`,
  });
};

export const getEdit = (req, res) => {
  const { id } = req.params;
  return res.render('edit', { pageTitle: `Editing` });
};

export const postEdit = (req, res) => {
  const { id } = req.params;
  return res.redirect(`/videos/${id}`);
};

export const getUpload = (re, res) => {
  return res.render('upload', { pageTitle: `ss` });
};

export const postUpload = async (req, res) => {
  try {
    await Video.create({
      title,
      description,
      hashtags: hashtags.split(',').map((word) => `#${word}`),
      createdAt: Date.now(),
      meta: {
        views: 0,
        rating: 0,
      },
    });
    return res.redirect('/');
  } catch (error) {
    return res.render('upload', {
      pageTitle: 'Upload Video',
      errorMessage: error._message,
    });
  }
};
