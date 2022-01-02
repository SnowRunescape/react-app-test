import axios from 'axios';

const baseURL = "http://minecart.local/api";
const api = axios.create({ baseURL });
const instance = {}

export {
    getStore, getRules
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

async function getRules(force)
{
    if (!instance.rules || force) {
        instance.rules = await api.get("/temp/rules")
    }

    return instance.rules
}
