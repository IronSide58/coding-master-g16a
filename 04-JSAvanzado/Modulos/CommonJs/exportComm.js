const error = "Error";
const info = "Info";

function log() {
    return "Export with CommonJS";
}

module.exports.error = error;
module.exports.info = info;
module.exports.log = log;