import axios from 'axios';

const baseURL = "http://minecart.local/api/v1";
const api = axios.create({ baseURL });
const instance = {}

export {
    getStore, getNews, getServers, getServerProducts, getRules, getTeams
}

async function getStore(force)
{
    if (!instance.store || force) {
        instance.store = await api.get("/store")
    }

    return instance.store
}

async function getNews(force)
{
    if (!instance.news || force) {
        instance.news = await api.get("/store/news")
    }

    return instance.news
}


async function getServers(force)
{
    if (!instance.servers || force) {
        instance.servers = await api.get("/store/servers")
    }

    return instance.servers
}

async function getServerProducts(serverId, force)
{
    return await api.get(`/store/server/${serverId}/products`)
}

async function getRules(force)
{
    if (!instance.rules || force) {
        instance.rules = await api.get("/store/rules")
    }

    return instance.rules
}

async function getTeams(force)
{
    if (!instance.teams || force) {
        instance.teams = await api.get("/store/teams")
    }

    return instance.teams
}
