const network = {
    31337: {
        name: "localhost",
    },
    4: {
        name: "rinkeby",
        ethUsdPriceFeed: "0x5f4eC3Df9cbd43714FE2740f5E3616155c5b8419",
    },
}

const INITIAL_SUPPLY = "1000000000000000000000000"

const developmentChains = ["hardhat", "localhost"]

module.exports = {
    network,
    INITIAL_SUPPLY,
    developmentChains,
}
