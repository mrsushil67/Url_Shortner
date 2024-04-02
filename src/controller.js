const service = require("./service");

exports.doshortUrl = async (req, res) => {
  try {
    if (!req.body.url) {
      return res.status(404).json({
        status: false,
        massage: "url not found",
      });
    }
    const resp = await service.shorturl(req.body.url);

    return res.status(200).json(resp);
  } catch (error) {}
};

exports.dolongUrl = async (req, res) => {
  try {
    const shortKeystore = req.params.skey
    console.log(shortKeystore)
    if (!shortKeystore) {
      return { status: false, massage: "check shortkey" };
    }
    const resp = await service.getUrl(shortKeystore)
    // return res.status(200).json({resp})
    return res.redirect(resp.longUrl)
  } catch (error) {}
};
