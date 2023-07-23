const DataUriParser = require("datauri/parser");
const path = require("path")
const getDataURI= (file) => {
    const parser = new DataUriParser({})
    const extName= path.extname(file.originalname).toString()
  return {
    data:parser.format(extName,file.buffer),
    extName:extName
  }
}


module.exports = getDataURI