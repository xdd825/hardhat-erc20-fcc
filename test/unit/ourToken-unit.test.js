const { assert, expect } = require("chai")
const { getNamedAccounts, deployments, ethers } = require("hardhat")
const { INITIAL_SUPPLY } = require("../../helper-hardhat-config")

describe("Our token unit test", function () {
    let ourToken, deployer, user1
    beforeEach(async function () {
        const accounts = await getNamedAccounts()
        deployer = accounts.deployer
        user1 = accounts.user1
        console.log(accounts)

        await deployments.fixture("all")
        ourToken = await ethers.getContract("OurToken", deployer)
    })

    it("Should have correct INITIAL_SUPPLY of token", async function () {
        const totalSupply = await ourToken.totalSupply()
        console.log(totalSupply)
        assert.equal(totalSupply.toString(), INITIAL_SUPPLY)
    })

    it("Should be able to transfer tokens successfully to an address", async function () {
        const tokenToSend = ethers.utils.parseEther("10")
        await ourToken.transfer(tokenToSend, user1)
        expect(await ourToken.balanceOf(user1)).to.be.equal(tokenToSend)
    })

    it("Should approve other address to spend token", async function () {
        const tokenToSpend = ethers.utils.parseEther("5")
        await ourToken.approve(user1, tokenToSpend)
        const ourToken1 = await ethers.getContract("OurToken", user1)
        await ourToken1.transform(deployer, user1, tokenToSpend)
        expect(await ourToken1.balanceOf(user1)).to.be.equal(tokenToSpend)
    })
})
