---
title: "Blockchain Basics for Everyone"
date: "2025-01-10"
category: "blockchain"
excerpt: "An intuitive explanation of blockchain technology of beginners"
tags: ["bitcoin", "blockchain", "ethereum"]
author: "Prashish Phunyal"
readTime: "7 min read"
---

In traditional finance a single entity like a bank is responsible for keeping records of your money and expects you to trust them to work diligently. With blockchains every node keeps a copy of the ledger which eliminates the need to put your faith in a central authoritative body.

"Okay, sounds great. But is it really that revolutionary?"

That is one of the questions I have tried to answer here among many more.

There's an ever growing curiosity among the general public regarding blockchains. Sadly this curiosity seldom gets translated into real understanding of blockchains. Mostly because blockchains are at the intersection of multiple disciplines like cryptography, mathematics, economics, and computer science. An explanation about blockchains is very likely to make the general audience feel overwhelmed. However, this should not be the case at all.

One does not necessarily need to get into the details of SHA-256 or the mathematics behind elliptic curve cryptography, nor does one need to come from a computer science, mathematics or economics background to grasp the fundamentals of blockchains and truly understand their potential.

This blog is aimed for the general audience because I believe that understanding of blockchains among the general public could significantly increase user adoption and be a catalyst for policy formations. Another reason I want people to understand blockchains is because it would somehow justify why enthusiasts like me speak so passionately about this space. This blog would also be a good starting point for developers as the primary aim of this blog is to provide a solid foundation on blockchains.

## Introduction

A blockchain is a platform where you can safely exchange value (anything valuable: money, assets or simply data) without a central authority or a middleman. It stores transactional data across different computers (nodes) working independently in such a way that everyone agrees on the legitimacy of the transactions. One implication of this is that you can send any amount of money to and from anywhere in the world directly to anyone.

Imagine you are sending some money to Bob. You initiate the transaction and it gets relayed through your bank. Bob will receive the money once and if your bank approves the transaction. Here the bank acts as an intermediary. It decides who you can send money to, where you can send your money and how much money you can send . It also has the authority to reverse your transactions or freeze your account.

Another deep flaw in traditional finance is that the financial institutions can often make risky bets with customer funds resulting in massive customer losses, bank collapses and may even result in a greater economic turmoil. The root cause being lack of transparency.

With blockchains you are making a fundamental shift of trust from centralised financial institutions to a decentralised and transparent platform that is governed by the rules of mathematics and computer code.

### A somewhat technical definition

A blockchain at its core is a cryptographically secure, peer-to-peer, distributed, immutable append-only transactional ledger updateable only via consensus. Too many jargons for something aimed at the general reader. However, understanding these terminologies is essential to understanding blockchains themselves. I've tried to explain what each terminology means in the context of blockchain.

**Peer-to-peer**: A network where every participant has equal status and you directly interact with each other. Everyone is a 'peer'. There are no servers. Every participant works as both a server and as a client.

**Immutable**: Extremely hard to change.

**Distributed**: The nodes work in a coordinated fashion to achieve a common outcome appearing as a single logical platform to the end user.

**Append-only**: New transactions can be added to the blockchain but existing transactions cannot be changed or removed.

**Consensus**: A set of rules that nodes follow to come to an agreement about the state of the blockchain. It allows the nodes to agree about the one 'true' ledger. It also helps determine who gets to add new transactions in the blockchain.

**Cryptographically secure**: Protected using strong cryptography (techniques based on mathematics mostly used for secure communication). Essentially, it means that blockchains are so secure that even someone with vast computational power cannot realistically break them.

I strongly recommend going through the definition again before continuing with the rest of the blog.

### Why is it called 'blockchain'?

We now know that blockchain stores transactions. Every node has a copy of the blockchain which updates regularly with the latest transactions. This record is essential for determining how much money each person owns. Here comes the catch. The transactions are not recorded individually on the blockchain. Instead, the latest transactions are grouped together into a block and appended on the existing chain of blocks. Hence, blockchain.

Storing the transactions as a chain of blocks is a security feature that prevents anyone from modifying the transactions. We'll briefly go through it in later sections.

## Components of a blockchain

Before we get into how blockchain work. Let's quickly go through the simplified version of the components that make a blockchain possible.

**A peer-to-peer network**: A P2P network is essential for connecting the participants and propagating transactions and blocks.

**Nodes**: A node is an independent participant (a computer or a device) that maintains a copy of the ledger, propagates and validates the transactions.

**Distributed Ledger**: I've been using the term blockchain to describe the platform as a whole. However, the distributed ledger that stores the transactions which is basically blocks of data chained together is also called blockchain. Apologies from my end if this has caused or may cause some confusions.

**Consensus Mechanism**: In a centralised system, a server is the authoritative figure. It doesn't need to worry about making the nodes agree with the server on it's computational results. Whatever the server decides, others must follow. Some challenges arise if we were to remove the central body from the equation. How do we make a bunch of independent nodes agree on which transactions are valid and which transactions need to be added in the blockchain? And importantly, who adds these transactions in the blockchain if there is no central body to govern this process. That is where consensus mechanisms come into play. It is a set of rules that the nodes follow to reach agreement. We'll see the working of Bitcoin's consensus mechanism in the Bitcoin section.

## A brief history of blockchains

Let's briefly go through how blockchains came into existence. Blockchains like I said previously combine multiple disciplines of computer science, mathematics and economics into a single domain. So, no single person is entirely responsible for the advancements of blockchain. It builds majorly upon decades of research in cryptography and distributed systems done by individuals working independently from each other.

### The actual origin

We could confidently say that blockchains became a hot topic of discussion with the release of Bitcoin in 2009. So, there a common misconception that bitcoin is the first or the longest running blockchain. However, the origins of blockchain could be traced back earlier to 1991 when Stuart Haber and W. Scott published a paper titled "How to Time-Stamp a Digital Document". Their major innovation was to create tamper-proof documents chained together using cryptographical hash functions (a function that is used to create digital fingerprint of data).This paper laid the foundation for blockchains. It is also cited directly in the Bitcoin whitepaper.

## Bitcoin

Bitcoin is a electronic payment system anyone to join the network and easily send and receive any amount of money to anyone in the world. Bitcoin is decentralised meaning the transactions are carried out directly among the participants without a trusted third party like a bank. It is also an open source project which means that anyone can run the code and even contribute to the codebase.

In this section, we'll take a look at the most popular and successful blockchain: Bitcoin. Learning about bitcoin is a very good starting point to learn about how blockchains. We'll first be going through how bitcoin was developed, how it works and it's limitations which led to the development of blockchain innovations like Ethereum.

### Pre-bitcoin Digital Moneys

With cryptography (science of secure communication and computation) becoming mainstream technology in the late 1970s and 1980s, cryptographers started working on a great challenge: the use of cryptography for the development of a digital money system. Now, why was this a great challenge? Because, of something called 'The Double Spend Problem'. Unlike physical cash, a digital money, at the end of the day, would be a bunch of 0s and 1s, which can be easily copied and spent multiple times. What this simply means is that someone can make a copy of the money he owns and spend the same money multiple times (double spending). Some notable pre-bitcoin digital money systems were DigiCash, B-Money and Bit Gold. However, they all eventually failed due to the reliance on some kind of central body for moderating the transactions: a single point of failure.

### How did Bitcoin solve this problem?

### Who founded bitcoin?

On Halloween, 2008, a whitepaper (a research based report that explains a complex problem and argues for a particular solution to that problem) titled "Bitcoin: A Peer-to-Peer Electronic Cash System" is published under the pseudonym **Satoshi Nakamoto**. The identity of the person or entity behind this pseudonym has been a matter of constant speculation since the release of Bitcoin. This could be a separate topic on it's own which I might write about in future blogs.

### What was in the paper?

Satoshi Nakamoto outlined the idea for a peer-to-peer digital money that operated without a trusted third party such as banks or governments. The paper proposed storing the transactions on a ledger (the blockchain), where each block a list of transactions and the cryptographic hash (a large number that acts as the fingerprint of each block). This would chain the blocks together create an immutable and secure records.

### The genesis block

By January 3, 2009, Nakamoto and the group of developers he attracted through the whitepaper were able to mine the first Bitcoin block, known as the Genesis Block. Satoshi was actively involved in the development of Bitcoin until late December in 2010 because he completely vanished after handing over the responsibility of further developments to the most active contributors of the open source Bitcoin project.

We've covered the origins of bitcoin in brief. With that out of the way, next we'll look at how Bitcoin works.

### How Bitcoin works?

Anyone can download and run the bitcoin software on their computers. When you run the program for the first time, it will connect to other computers running the same program, and they will start sharing a file with you. This file is called the blockchain, which is a big list of transactions.

When you want to send bitcoin to someone, you create a transaction and announce it to the network. The nodes then collect these new transactions and bundle them into a new "block."

But who gets to add this new block to the chain? This is where "mining" comes in. Mining is like a mathematical race. All the nodes (miners) compete to solve a very difficult math puzzle. The first one to solve it gets to add the new block of transactions to the blockchain and is rewarded with some new bitcoin. This process is called Proof-of-Work.

This system makes it incredibly hard to change old transactions. If you wanted to change a transaction from a few blocks back, you would have to re-do the Proof-of-Work for that block and every block that came after it, which would require more computer power than the rest of the network combined. This is practically impossible, making the blockchain secure.

### Limitations of Bitcoin

Bitcoin in itself was a revolutionary idea. It provided a platform where people could directly send money to anyone without a trusted third party in a secure and tamper resistant way. People soon started imagining the vast potential of the blockchains beyond using it just for digital currency. The key idea was that of smart contracts. Smart contracts are programs of arbitrary complexity that run on blockchains. This means you could run almost any program in the blockchain. However, it was not possible with Bitcoin due to it's limited scripting language.

## Ethereum

This limitation of Bitcoin was solved with the development of Ethereum. An early Bitcoin enthusiast named Vitalik Buterin cam up with the idea of building a new kind of blockchain. His vision was: a "world computer". A single, decentralized computation platform that anyone in the world could use but no single person controls. This project became Ethereum. Ethereum supported the idea of smart contracts.

This ability to run code opened up a whole new world of possibilities. It led to the rise of **Decentralized Applications**, or **dApps**. These are apps like social media platforms, games, and financial services that run on the blockchain instead of on a company's central server.
