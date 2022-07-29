//express
var express = require("express");
var app = express();
var cors = require("cors");
var fs = require("fs");
var helpers = require("./helpers");

app.listen(3001, startup);
function startup() {
  console.log("Server started at port 3001");
}
app.use(cors());
app.use(express.static(__dirname));

//body-parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

jsonfile = __dirname + "/projects.json";

//GET /nft/retrieveAllNFTs
app.get("/nft/retrieveAllNFTs", function (req, res) {
  console.log(req.method, req.url);
  nft = JSON.parse(fs.readFileSync(jsonfile, "utf8")).nft;
  console.log("Response: ", nft);
  res.send(nft);
});

//POST/nft/issueNFT
app.post("/nft/issueNFT", function (req, res) {
  console.log(req.method, req.url);
  nft = JSON.parse(fs.readFileSync(jsonfile)).nft;
  nft.push(req.body);
  console.log("Response: ", nft);
  fs.writeFileSync(
    jsonfile,
    JSON.stringify({
      ...JSON.parse(fs.readFileSync(jsonfile)),
      nft: nft,
    }),
    "utf8"
  );
  res.send(helpers.toCamel(req.body));
});

//GET nft/retrieveAllNFTSForUser/:nftOwner
app.get("/nft/getNftsByUser/:nftOwner",function (req,res){
  console.log(req.method, req.url);
  console.log(req.params);
  nft = JSON.parse(fs.readFileSync(jsonfile, "utf8")).single;
  console.log("Response: ", nft);
  res.send(nft);
})

app.get("/nft/history/:nftId",function (req,res){
  console.log(req.method, req.url);
  console.log(req.params);
  nft = JSON.parse(fs.readFileSync(jsonfile, "utf8")).history;
  console.log("Response: ", nft);
  res.send(nft);
})




app.post("/nft/validateNFT", function (req, res) {
  console.log(req.method, req.url);
  nft = JSON.parse(fs.readFileSync(jsonfile)).nft;
  nft.push(req.body);
  console.log("Response: ", nft);
  fs.writeFileSync(
    jsonfile,
    JSON.stringify({
      ...JSON.parse(fs.readFileSync(jsonfile)),
      nft: nft,
    }),
    "utf8"
  );
  res.send(helpers.toCamel({"result": "valid"}));
});

app.post("/nft/expireNft", function (req, res) {
  console.log(req.method, req.url, req.body);
  nft = JSON.parse(fs.readFileSync(jsonfile)).nft;
  nft = nft.map((nft) =>{
    if(nft.nftId === req.body.nftId){
      console.log(nft.nftStatus)
      nft.nftStatus= "EXPIRED"
      console.log(nft.nftStatus)
    }
    return nft
  })
  console.log("Response: ",nft );
  fs.writeFileSync(
    jsonfile,
    JSON.stringify({
      ...JSON.parse(fs.readFileSync(jsonfile)),
      nft: nft,
    }),
    "utf8"
  );
  res.send(helpers.toCamel({
    "result": "success"}));
  
});