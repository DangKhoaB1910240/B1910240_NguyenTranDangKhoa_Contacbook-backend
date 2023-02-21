const express = require("express");
const contacts = require("../controller/contact.controller");
const router = express.Router();
router.route("/")
    .get(contacts.findAll)
    .post(contacts.create)
    .delete(contacts.deleteAll)
router.route("/favorite")
    .get(contacts.findAllFavorite);
router.route("/:id")
    .get(contacts.findOne)
    .put(contacts.update)
    .delete(contacts.detele);
router.route("/login")
    .post(users.create);
    router.route("/login")
.post(users.create);

module.exports = router;