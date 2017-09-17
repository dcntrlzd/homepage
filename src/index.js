import Web3 from 'web3';
import Graph from 'ngraph.graph';
import Renderer from 'ngraph.pixel';

let initialBlock;
let latestBlock;
let currentBlock;

const provider = new Web3.providers.HttpProvider("https://mainnet.infura.io/mTYprP0XeHjUrSadUTc0");
const web3 = new Web3(provider);
const graph = Graph();
let initialized = false;

const baseInterval = 15 * 1000;
const catchUpTime = 1 * 60 * 1000;
const backInTime = 5 * 60 * 1000;
const catchUpInterval = (catchUpTime / backInTime)  * baseInterval;

web3.eth.getBlockNumber()
  .then((_latestBlock) => {
    latestBlock = _latestBlock;
    initialBlock = latestBlock - Math.floor(backInTime / baseInterval);
    currentBlock = initialBlock;
    fetch();
  });

function fetch() {
  web3.eth.getBlock(currentBlock >= latestBlock ? 'latest' : currentBlock)
    .then(({ number, transactions: transactionIds }) => {
      currentBlock = number;
      return Promise.all(transactionIds.map((transactionId) => {
        return web3.eth.getTransactionReceipt(transactionId);
      }));
    })
    .then((transactions) => {
      const counter = (currentBlock !== initialBlock) ? `#${initialBlock} - #${currentBlock}` : `#${currentBlock}`;
      document.querySelector('.counter').innerHTML = `ETHERERUM BLOCK ${counter}`;
      currentBlock += 1;

      graph.beginUpdate();
      transactions.forEach((transaction) => {
        const { from, to, contractAddress } = transaction;
        const params = [from || contractAddress, to || contractAddress, {}];
        graph.addLink(...params);
      });
      graph.endUpdate();

      if (!initialized && graph.getLinksCount() > 0) {
        const renderer = Renderer(graph, {
          clearColor: 0x333333,
          autoFit: true,
          container: document.getElementById('graph'),
          is3d: true,
          link: () => ({ fromColor: 0x666666, toColor: 0x666666 }),
          node: () => ({ color: 0x666666, size: 10 })
        });
        initialized = true;
      }

      const timeout = (currentBlock >= latestBlock) ? baseInterval : catchUpInterval;
      setTimeout(fetch, timeout);
    });
}
