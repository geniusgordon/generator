var url;
if (process.env.NODE_ENV == 'test')
    url = "mongodb://localhost/{name}Test"
else
    url = "mongodb://localhost/{name}Dev"

module.exports = {
    url: url
};

