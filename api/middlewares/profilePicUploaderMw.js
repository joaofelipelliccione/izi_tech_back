const multer = require('multer');

const storage = multer.diskStorage({
  destination(_req, _file, cb) {
    cb(null, './api/uploads/avatars');
  },
  filename(req, file, cb) {
    const { id } = req.params;
    cb(null, `${id}.${file.mimetype.split('/')[1]}`);
  },
});

module.exports = multer({ storage });
