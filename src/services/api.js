import axios from 'axios';

const baseURL = "http://minecart.local/api";
const api = axios.create({ baseURL });
const instance = {}

export default {
    async getRules (force)
    {
        if (!instance.rules || force) {
            instance.rules = await api.get("/temp/rules")
        }

        return instance.rules
    }
}
