const router = require("express").Router();

const Users = require("./user-model.js");

router.get("/", (req, res) => {
  Users.find()
    .then(users => {
      res.json(users);
    })
    .catch(err => res.send(err));
});
router.delete("/:id", (req, res) => {
    const id = req.params.id
    Users.remove(id)
      .then(count => {
        res.status(200).json(count);
      })
      .catch(err => res.send(err));
  });

module.exports = router;