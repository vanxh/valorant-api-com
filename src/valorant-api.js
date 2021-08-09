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
    * @param {object} [config]
    * @param {string} [config.language]
    */
    constructor(config = {}) {
        this.language = config.language || 'en-US';
        console.log(`Successfully Connected to Valorant-Api!`)
    }

    /**
    * request(endpoint)
    * @param {string} [endpoint]
    * returns {Promise <object>}
    */
    async request(endpoint) {
        var config = {
            method: `get`,
            url: `${base_url}${endpoint}?language=${this.language}`
        };
        try {
            return (await axios(config)).data;
        } catch (e) {
            return e;
        }
    }

    /**
    * getAgents(uuid)
    * returns all agents data or if you give a uuid data of that agent
    * @param {string} [uuid]
    * @param {boolean} [isPlayableCharacter]
    * returns {Promise <object>}
    */
    async getAgents(uuid, isPlayableCharacter) {
        return (uuid ? await this.request(`agents/${uuid}`) : await this.request(`agents?isPlayableCharacter=${isPlayableCharacter}`));
    }

    /**
    * getBuddies(uuid)
    * returns all weapon buddies data or if you give a uuid data of that weapon buddy
    * @param {string} [uuid]
    * returns {Promise <object>}
    */
    async getBuddies(uuid) {
        return (uuid ? await this.request(`buddies/${uuid}`) : await this.request(`buddies`));
    }

    /**
    * getBundles(uuid)
    * returns all valorant bundles data or if you give a uuid data of that valorant bundle
    * @param {string} [uuid]
    * returns {Promise <object>}
    */
    async getBundles(uuid) {
        return (uuid ? await this.request(`bundles/${uuid}`) : await this.request(`bundles`));
    }

    /**
    * getCompetitiveTiers(uuid)
    * returns all valorant competitve-tiers data or if you give a uuid data of that valorant competitve-tier
    * @param {string} [uuid]
    * returns {Promise <object>}
    */
     async getCompetitiveTiers(uuid) {
        return (uuid ? await this.request(`competitivetiers/${uuid}`) : await this.request(`competitivetiers`));
    }

    /**
    * getContentTiers(uuid)
    * returns all valorant content-tiers data or if you give a uuid data of that valorant content-tier
    * @param {string} [uuid]
    * returns {Promise <object>}
    */
    async getContentTiers(uuid) {
        return (uuid ? await this.request(`contenttiers/${uuid}`) : await this.request(`contenttiers`));
    }

    /**
    * getContracts(uuid)
    * returns all valorant contract data or if you give a uuid data of that valorant contract
    * @param {string} [uuid]
    * returns {Promise <object>}
    */
     async getContracts(uuid) {
        return (uuid ? await this.request(`contracts/${uuid}`) : await this.request(`contracts`));
    }

    /**
    * getCurrency(uuid)
    * returns all valorant currencies or a currency data by uuid
    * @param {string} [uuid]
    * returns {Promise <object>}
    */
    async getCurrency(uuid) {
        return (uuid ? await this.request(`currencies/${uuid}`) : await this.request(`currencies/`));
    }

    /**
    * gamemodes(uuid)
    * returns all valorant gamemodes data or a gamemode data by uuid
    * @param {string} [uuid]
    * returns {Promise <object>}
    */
    async getGamemodes(uuid) {
        return (uuid ? await this.request(`gamemodes/${uuid}`) : await this.request(`gamemodes`));
    }

    /**
    * getGear(uuid)
    * returns all valorant gear data or a gear data by uuid
    * @param {string} [uuid]
    * returns {Promise <object>}
    */
     async getGear(uuid) {
        return (uuid ? await this.request(`gear/${uuid}`) : await this.request(`gear`));
    }

    /**
    * getEvents(uuid)
    * returns all valorant event data or a event data by uuid
    * @param {string} [uuid]
    * returns {Promise <object>}
    */
     async getEvents(uuid) {
        return (uuid ? await this.request(`events/${uuid}`) : await this.request(`events`));
    }

    /**
    * getEquippables(uuid)
    * returns all valorant equippables data or a equippables data by uuid
    * @param {string} [uuid]
    * returns {Promise <object>}
    */
    async getEquippables(uuid) {
        return (uuid ? await this.request(`equippables/${uuid}`) : await this.request(`equippables`));
    }

    /**
    * getMaps(uuid)
    * returns all valorant maps data or a map data by uuid
    * @param {string} [uuid]
    * returns {Promise <object>}
    */
    async getMaps(uuid) {
        return (uuid ? await this.request(`maps/${uuid}`) : await this.request(`maps`));
    }

    /**
    * getMissions(uuid)
    * returns all valorant mission data or a mission data by uuid
    * @param {string} [uuid]
    * returns {Promise <object>}
    */
     async getMissions(uuid) {
        return (uuid ? await this.request(`missions/${uuid}`) : await this.request(`missions`));
    }

    /**
    * getObjectives(uuid)
    * returns all valorant objective data or a objective data by uuid
    * @param {string} [uuid]
    * returns {Promise <object>}
    */
     async getObjectives(uuid) {
        return (uuid ? await this.request(`objectives/${uuid}`) : await this.request(`objectives`));
    }

    /**
    * getPlayerCards(uuid)
    * returns all valorant player cards data or a player card data by uuid
    * @param {string} [uuid]
    * returns {Promise <object>}
    */
    async getPlayerCards(uuid) {
        return (uuid ? await this.request(`playercards/${uuid}`) : await this.request(`playercards`));
    }

    /**
    * getPlayerTitles(uuid)
    * returns all valorant player titles data or a player title data by uuid
    * @param {string} [uuid]
    * returns {Promise <object>}
    */
    async getPlayerTitles(uuid) {
        return (uuid ? await this.request(`playertitles/${uuid}`) : await this.request(`playertitles`));
    }

    /**
    * getSeasons(uuid)
    * returns all valorant seasons data or a season data by uuid
    * @param {string} [uuid]
    * returns {Promise <object>}
    */
    async getSeasons(uuid) {
        return (uuid ? await this.request(`seasons/${uuid}`) : await this.request(`seasons`));
    }

    /**
    * getSprays(uuid)
    * returns all valorant sprays data or a spray data by uuid
    * @param {string} [uuid]
    * returns {Promise <object>}
    */
    async getSprays(uuid) {
        return (uuid ? await this.request(`sprays/${uuid}`) : await this.request(`sprays`));
    }

    /**
    * getSkins(uuid)
    * returns all valorant skin data or a skin data by uuid
    * @param {string} [uuid]
    * returns {Promise <object>}
    */
     async getSkins(uuid) {
        return (uuid ? await this.request(`weapons/skins/${uuid}`) : await this.request(`weapons/skins`));
    }

    /**
    * getSkinLevels(uuid)
    * returns all valorant skin level data or a skin level data by uuid
    * @param {string} [uuid]
    * returns {Promise <object>}
    */
     async getSkinLevels(uuid) {
        return (uuid ? await this.request(`weapons/skinlevels/${uuid}`) : await this.request(`weapons/skinlevels`));
    }

    /**
    * getSkinChromas(uuid)
    * returns all valorant skin chroma data or a skin chroma data by uuid
    * @param {string} [uuid]
    * returns {Promise <object>}
    */
     async getSkinChromas(uuid) {
        return (uuid ? await this.request(`weapons/skinchromas/${uuid}`) : await this.request(`weapons/skinchromas`));
    }

    /**
    * getThemes(uuid)
    * returns all valorant themes data or a theme data by uuid
    * @param {string} [uuid]
    * returns {Promise <object>}
    */
    async getThemes(uuid) {
        return (uuid ? await this.request(`themes/${uuid}`) : await this.request(`themes`));
    }

    /**
    * getWeapons(uuid)
    * returns all valorant weapons data or a weapon data by uuid
    * @param {string} [uuid]
    * returns {Promise <object>}
    */
    async getWeapons(uuid) {
        return (uuid ? await this.request(`weapons/${uuid}`) : await this.request(`weapons`));
    }

    /**
    * getVersion()
    * returns version
    * returns {Promise <object>}
    */
    async getVersion() {
        return await this.request(`version`);
    }
}
module.exports = Client
