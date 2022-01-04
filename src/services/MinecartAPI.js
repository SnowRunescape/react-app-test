import axios from 'axios';

const baseURL = "http://minecart.local/api/v1";
const api = axios.create({ baseURL });
const instance = {}

export {
    getStore, getNews, getServers, getServerProducts, getRules, getTeams
}

function getStore(force)
{
    return {
        name: "Minecart",
        storeIp: "jogar.snowdev.com.br",
        discord: "451861943364616192",
        layout: "default",
        logo: "https://cdn.minecart.com.br/assets/img/logo.png",
        background: "https://cdn.minecart.com.br/assets/img/slide/slide-default-1.png",
        favicon: "https://cdn.minecart.com.br/favicon.ico",
        colors: {
          navbar: "#662780"
        }
    }
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

async function getServerProducts(force)
{
    await api.get("/store/news")
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
