const SHA = require('crypto-js/sha256');


class Block {
  constructor(index, timestamp, data, previousHash = " ") {
    this.index = index;
    this.timestamp = timestamp;
    this.data = data;
    this.previousHash = previousHash;
    this.hash = this.createHash();
  }
  createHash() {
    return SHA(this.index + this.previousHash + this.timestamp + JSON.stringify(this.data)).toString();
  }
};

class Blockchain {
  constructor() {
    this.blockchain = [this.createGenesisBlock()];
  };
  createGenesisBlock() {
    return new Block(0, Date(), "Initialize", "0");
  };
  getLatestBlock() {
    return [this.blockchain.length - 1];
  };
  addBlock(newBlock) {
    newBlock.previousHash = this.getLatestBlock().hash;
    newBlock.hash = newBlock.createHash();
    this.blockchain.push(newBlock);
  };
  validate() {
    for (let i = 0; i < this.blockchain.length - 1; i++) {
      const blockchain = this.blockchain;
      let validation = false

      if (blockchain[i].hash !== blockchain[i].createHash() || blockchain[i].previousHash !== blockchain[i - 1].hash) {
        validation = false
      } else {
        validation = true
      }

      return validaiton
    }
  }
};

// example blockchain
let makingCoins = new Blockchain();
let blockToAdd = new Block(1, "21-08-2020", { sender: "ExampleMan", receiver: "ExampleWoman", quantity: 200 })
let secondBlockToAdd = new Block(2, "21-08-2020", { sender: "ExampleWoman", receiver: "ExampleMan", quantity: 50 })
makingCoins.addBlock(blockToAdd);
makingCoins.addBlock(secondBlockToAdd);
console.log(JSON.stringify(makingCoins))

