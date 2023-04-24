require('dotenv').config()
module.exports = {
    db: `mongodb+srv://${encodeURIComponent(process.env.MONGO_USER)}:${encodeURIComponent(process.env.MONGO_PASS)}@${encodeURIComponent(process.env.MONGO_CLUSTER)}/${encodeURIComponent(process.env.MONGO_DB)}?retryWrites=true&w=majority`
};