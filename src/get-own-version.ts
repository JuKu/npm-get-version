module.exports = async function getVersion() {
  const promise1 = new Promise<string>((resolve, reject) => {
    const filePath = process.cwd() + "/package.json";

    const fs = require("fs");

    fs.readFile(filePath, 'utf8', function(error, content) {
      if (error) {
        // cannot find or open package.json
        console.warn("Cannot find package.json: " + process)
        resolve("0.0.0-n/a");
      } else {
        const jsonObject = JSON.parse(content);
        const versionStr = jsonObject["version"];
        resolve(versionStr);
      }
    });
  });

  return promise1;
}
