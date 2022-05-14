---
title: 'DELOT'
description: 'The world’s first innovative decentralized lottery 'game for token holders'
date: '2022-03-10'
image: 'https://gateway.ipfs.io/ipfs/QmPPyBTsVKrJD2tHHAYDKirDyT6Z2TnWvqjHptesj2pRUL'
network: 'bsc'
category: 'gambling'
---

![Error](https://gateway.ipfs.io/ipfs/QmQ5Am21Rie7uDJQ6FA4b51Q9gSjcht2arNUXgQUmfxZPS)

## Introduction
DELOT is the world’s first innovative decentralized lottery game for token holders. The more token you hold the more ticket you get. The more ticket you have the more chance to win the grand prize. DELOT token is the utility token that is used in the Lottery game.


## Problem Solved

DELOT has the better mechanism: you only need to deposit a little token to join the round. You can get additional tickets just by holding, the more token you hold the more ticket you get, so you are beneficial by increasing the chance to win lottery round just by holding, you do not need to deposit more (spend more tokens to get more tickets). Especially, the more ticket you have, the more chance to win the grand prize.

Unlike a traditional lottery where players must continuously buy tickets for every drawing, DELOT focuses on simplicity - just acquire the token, hold, and you will automatically be entered into the next lottery rounds thanks to Auto Pool feature.


## Features

1. Fully decentralized: The entire process is managed by ONE smart contract and deployed to run on-chain.
2. Fully Automatic System: As you may know, smart contact itself cannot trigger states. By using with Chainlink Keepers and make the smart contract is compatible with the UpKeep, the lottery game can run endlessly.
3. Easy to join: No need to choose lucky numbers as traditional lottery.
4. Incentive for token holders: Players are required to hold tokens till the end of the round to get more tickets, so it will drive the demand of token. Not only will it increase DELOTE token prices, players will get more chance to win the grand prize, so this in a way is double incentive for Hodlers.
5. Auto Pool feature: Allow to join next rounds automatically. No action is required from users to join. Unlike a traditional lottery where players must continuously buy tickets for every drawing. Moreover, player get more tickets by joining the round soon, so that have more chance to win the round.



## Vision

MetagamZ aims to build a Virtual GameFi ecosystem that is comprehensive, immersive, efficient and effective in connecting the whole crypto gaming
economy, including game developers, publishers, gamers and brands. Within the ecosystem, developers can launch decentralized games, and players can play games and earn revenue and assets (NFTs), with brands being offered the ability to market and get exposure to their products and services by building their own VR experiences and games packaged in the form of gaming districts, buildings and zones.

## Working

There are unlimited rounds, each round’s period is about 3-7 days.
There are 3 states in each round: Start -> Active -> End.

Players deposit tokens to join the round while the round state is Active.
Player can join the round automatically and get the maximum tickets by using Auto Pool feature while the round state is Start.

Once the round is ended, our Upkeep in Chainlink Keepers call to publicly “performUpkeep” function in the smart contract to:

1. Recalculate tickets of players, reset Hold Tickets to zero if they do not hold enough token as recognized in the first deposit.
2. Call to Chainlink VRF to get randomness numbers
3. Find winners based on random numbers
4. Reward to the prize winners

## Tokenomics

1. Name: DELOT
2. Symbol: $DELOT

![Error](https://gateway.ipfs.io/ipfs/QmV9GXHByonaEZfyejcLJAdi3LhKxvS8KctKyeXENVo1RP)


## Docs

[AUDITS](https://docs.delot.io/tokenomics/audit)
[WHITEPAPER](https://docs.delot.io/introduction/overview)


## Links

[WEBISTE](https://www.delot.io/)
[TELEGRAM](https://t.me/delot_io)
[TWITTER](https://twitter.com/delot_io)
