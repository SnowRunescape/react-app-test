import axios from 'axios';

const baseURL = "http://minecart.local/api";
const api = axios.create({ baseURL });
const instance = {}

export {
    getStore, getServers, getRules, getTeam
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

function getServers(force)
{
    return [
        {
            "id": 1,
            "name": "SnowMC",
            "image": "https://cdn.minecart.com.br/assets/img/cube-server.png"
        },
        {
            "id": 2,
            "name": "Teste",
            "image": "https://cdn.minecart.com.br/assets/img/cube-server.png"
        }
    ]
}

async function getRules(force)
{
    if (!instance.rules || force) {
        instance.rules = await api.get("/temp/rules")
    }

    return instance.rules
}

function getTeam(force)
{
    return [
        {
            "id": 1,
            "name": "Diretor",
            "color": "red",
            "members": [
                {
                    "id": 1,
                    "name": "Bruno"
                }
            ]
        },
        {
            "id": 2,
            "name": "Helper",
            "color": "blue",
            "members": [
                {
                    "id": 2,
                    "name": "Trojan"
                },
                {
                    "id": 3,
                    "name": "SnowDev"
                }
            ]
        }
    ]
}
