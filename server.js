const app = express();
app.get("*", (req, res) => {
  res.sendFile(`./zero/dist/index.html`); // load the single view file (angular will handle the page changes on the front-end)
});
