const pluginIcons = require("eleventy-plugin-icons");

module.exports = function (eleventyConfig) {
    eleventyConfig.addPlugin(pluginIcons, {
        sources: [
            {
                name: "custom",
                path: "./src/assets/icons",
                default: true,
            },
        ],
    });
    eleventyConfig.addPassthroughCopy("src/assets/css");

    return {
        dir: {
            input: "src",
            includes: "_includes",
            data: "_data",
            output: "dist",
        },
    };
};
