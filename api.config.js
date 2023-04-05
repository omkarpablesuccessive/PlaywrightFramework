import {PlaywrightConfig} from "@playwright/test";

const config = {

    timeout: 60000,
    retries:0,
    testDir:'test/Src/API',
    use:{
        headless: true,

    }
}; export default config;