/**
* valorant-api-com
* Module to make API calls to valorant-api.com
* Credits to valorant-api.com for making the api.
*
* @author Vanxh
*/

// modules
const axios = require('axios');

const base_url = `https://valorant-api.com/v1/`

// main class
class Client {

    /**
    * constructor()
    *
    * @param {object} [config]
    * @param {string} [config.language]
    */
    constructor(config = {}) {
        this.language = config.language || 'en-US';
        console.log(`Successfully Connected to Valorant-Api!`)
    }

    /**
    * request(endpoint)
    *
    * @param {string} [endpoint]
    *
    * returns {Promise <object>}
    */
    async request(endpoint) {
        var config = {
            method: `get`,
            url: `${base_url}${endpoint}?language=${this.language}`
        };
        try {
            let response = (await axios(config)).data;
            return response;
        } catch (e) {
            return e;
        }
    }

    /**
    * getAgents(uuid)
    * returns all agents data or if you give a uuid data of that agent
    *
    * @param {string} [uuid]
    *
    * returns {Promise <object>}
    */
    async getAgents(uuid) {
        let response;
        if (!uuid) response = await this.request(`agents`);
        else response = await this.request(`agents/${uuid}`);
        return response;
    }

    /**
    * getBuddies(uuid)
    * returns all weapon buddies data or if you give a uuid data of that weapon buddy
    *
    * @param {string} [uuid]
    *
    * returns {Promise <object>}
    */
    async getBuddies(uuid) {
        let response;
        if (!uuid) response = await this.request(`buddies`);
        else response = await this.request(`buddies/${uuid}`);
        return response;
    }

    /**
    * getBundles(uuid)
    * returns all valorant bundles data or if you give a uuid data of that valorant bundle
    *
    * @param {string} [uuid]
    *
    * returns {Promise <object>}
    */
    async getBundles(uuid) {
        let response;
        if (!uuid) response = await this.request(`bundles`);
        else response = await this.request(`bundles/${uuid}`);
        return response;
    }

    /**
    * contentTiers(uuid)
    * returns all valorant content-tiers data or if you give a uuid data of that valorant content-tier
    *
    * @param {string} [uuid]
    *
    * returns {Promise <object>}
    */
    async contentTiers(uuid) {
        let response;
        if (!uuid) response = await this.request(`contenttiers`);
        else response = await this.request(`contenttiers/${uuid}`);
        return response;
    }

    /**
    * getCurrency(uuid)
    * returns all valorant currencies or a currency data by uuid
    *
    * @param {string} [uuid]
    *
    * returns {Promise <object>}
    */
    async getCurrency(uuid) {
        let response;
        if (!uuid) response = await this.request(`currencies`);
        else response = await this.request(`currencies/${uuid}`);
        return response;
    }

    /**
    * gamemodes(uuid)
    * returns all valorant gamemodes data or a gamemode data by uuid
    *
    * @param {string} [uuid]
    *
    * returns {Promise <object>}
    */
    async gamemodes(uuid) {
        let response;
        if (!uuid) response = await this.request(`gamemodes`);
        else response = await this.request(`gamemodes/${uuid}`);
        return response;
    }

    /**
    * equippables(uuid)
    * returns all valorant equippables data or a equippables data by uuid
    *
    * @param {string} [uuid]
    *
    * returns {Promise <object>}
    */
    async equippables(uuid) {
        let response;
        if (!uuid) response = await this.request(`equippables`);
        else response = await this.request(`equippables/${uuid}`);
        return response;
    }

    /**
    * maps(uuid)
    * returns all valorant maps data or a map data by uuid
    *
    * @param {string} [uuid]
    *
    * returns {Promise <object>}
    */
    async maps(uuid) {
        let response;
        if (!uuid) response = await this.request(`maps`);
        else response = await this.request(`maps/${uuid}`);
        return response;
    }

    /**
    * getPlayerCards(uuid)
    * returns all valorant player cards data or a player card data by uuid
    *
    * @param {string} [uuid]
    *
    * returns {Promise <object>}
    */
    async getPlayerCards(uuid) {
        let response;
        if (!uuid) response = await this.request(`playercards`);
        else response = await this.request(`playercards/${uuid}`);
        return response;
    }

    /**
    * getPlayerTitles(uuid)
    * returns all valorant player titles data or a player title data by uuid
    *
    * @param {string} [uuid]
    *
    * returns {Promise <object>}
    */
    async getPlayerTitles(uuid) {
        let response;
        if (!uuid) response = await this.request(`playertitles`);
        else response = await this.request(`playertitles/${uuid}`);
        return response;
    }

    /**
    * getSeasons(uuid)
    * returns all valorant seasons data or a season data by uuid
    *
    * @param {string} [uuid]
    *
    * returns {Promise <object>}
    */
    async getSeasons(uuid) {
        let response;
        if (!uuid) response = await this.request(`seasons`);
        else response = await this.request(`seasons/${uuid}`);
        return response;
    }

    /**
    * getSprays(uuid)
    * returns all valorant sprays data or a spray data by uuid
    *
    * @param {string} [uuid]
    *
    * returns {Promise <object>}
    */
    async getSprays(uuid) {
        let response;
        if (!uuid) response = await this.request(`sprays`);
        else response = await this.request(`sprays/${uuid}`);
        return response;
    }

    /**
    * getThemes(uuid)
    * returns all valorant themes data or a theme data by uuid
    *
    * @param {string} [uuid]
    *
    * returns {Promise <object>}
    */
    async getThemes(uuid) {
        let response;
        if (!uuid) response = await this.request(`themes`);
        else response = await this.request(`themes/${uuid}`);
        return response;
    }

    /**
    * getWeapons(uuid)
    * returns all valorant weapons data or a weapon data by uuid
    *
    * @param {string} [uuid]
    *
    * returns {Promise <object>}
    */
    async getWeapons(uuid) {
        let response;
        if (!uuid) response = await this.request(`weapons`);
        else response = await this.request(`weapons/${uuid}`);
        return response;
    }

    /**
    * getVersion()
    * returns version
    *
    * returns {Promise <object>}
    */
    async getVersion() {
        let response = await this.request(`version`);
        return response;
    }

}

module.exports = Client