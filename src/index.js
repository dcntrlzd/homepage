import 'promise-polyfill';
import './styles.css';

let initialBlock;
let latestBlock;
let currentBlock;

const baseInterval = 15 * 1000;
const catchUpTime = 1 * 60 * 1000;
const backInTime = 5 * 60 * 1000;
const catchUpInterval = (catchUpTime / backInTime)  * baseInterval;

const loadDependencies = () => Promise.all([
  import(/* webpackChunkName: "ethers" */ 'ethers'),
  import(/* webpackChunkName: "ngraph" */ 'ngraph.graph'),
  import(/* webpackChunkName: "ngraph" */ 'ngraph.pixel'),
]);

loadDependencies().then(([ Ethers, Graph, Renderer]) => {
  const providers = Ethers.providers;
  const network = providers.networks.mainnet;
  const provider = new providers.InfuraProvider(network);

  const graph = Graph();

  let initialized = false;
  provider.getBlockNumber()
    .then((_latestBlock) => {
      latestBlock = _latestBlock;
      initialBlock = latestBlock - Math.floor(backInTime / baseInterval);
      currentBlock = initialBlock;
      fetch();
    });

  function fetch() {
    provider.getBlock(currentBlock >= latestBlock ? 'latest' : currentBlock)
      .then(({ number, transactions: transactionIds }) => {
        currentBlock = number;
        return Promise.all(transactionIds.map((transactionId) => {
          return provider.getTransaction(transactionId);
        }));
      })
      .then((transactions) => {
        const currentBlockLink = `<a href="https://etherscan.io/txs?block=${currentBlock}" target="_blank">#${currentBlock}</a>`;
        const counter = (currentBlock !== initialBlock) ? `#${initialBlock} -> ${currentBlockLink}` : `${currentBlockLink}`;
        document.querySelector('.counter').innerHTML = `ETHEREUM BLOCK ${counter}</a>`;
        currentBlock += 1;

        graph.beginUpdate();
        transactions.forEach((transaction) => {
          if (!transaction) return;
          const { from, to, contractAddress } = transaction;
          const linkFrom = from || contractAddress;
          const linkTo = to || contractAddress;
          if (!linkFrom || !linkTo) return;
          const params = [linkFrom, linkTo, {}];
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
});
