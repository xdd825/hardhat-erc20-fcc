require("dotenv").config()
require("hardhat-deploy")
require("@nomiclabs/hardhat-etherscan")
require("solidity-coverage")
/**
 * @type import('hardhat/config').HardhatUserConfig
 */

const RINKEBY_RPC_URL = process.env.RINKEBY_RPC_URL
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY
const PRIVATE_KEY = process.env.PRIVATE_KEY

module.exports = {
    solidity: "0.8.7",
    defaultNetwork: "hardhat",
    networks: {
        hardhat: {
            chainId: 31337,
        },
        localhost: {
            chainId: 31337,
        },
        rinkeby: {
            url: RINKEBY_RPC_URL,
            accounts: PRIVATE_KEY !== "undefined" ? [PRIVATE_KEY] : [],
            saveDeployments: true,
            chainId: 4,
        },
    },
    etherscan: {
        apiKey: {
            rinkeby: ETHERSCAN_API_KEY,
        },
    },
    namedAccounts: {
        deployer: {
            default: 0,
            1: 0,
        },
        user1: {
            default: 1,
        },
    },
}
