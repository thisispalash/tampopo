# Layer 2 (and beyond?)
> Why reinvent the wheel?

## Rethinking Nodes

One of the best aspects of web3 is its permissionless entry to the network, by anyone being able to set up a *node* for the network. However, for most networks, it is still quite technically challenging, and the average user would rather be abstracted away from it. If they so choose, they may learn more by reading the code and these docs to learn how nodes work and operate. As such, this project is divided into two main parts — the web3 address and decentralised website; and the familiar interface to the network in the form of `emtyyourmug.com` and `pullmythread.com`.

The decentralised version (at `tampopo.eth`) serves as a website and the main address for community funds. Moreover, it is designed keeping the avid blockchainer in mind (so, you are familiar with, *and use*, metamask, some crypto exchange, and perhaps even have some investments), ie, no spoonfeeding. The spoonfed versions, and highly automated, versions are on the traditional internet (compare with TradFi?). One thing that always bothered me was that engagement and behaviour tracking is used primarily for ad revenue, which seems like the opposite of what we should be doing - making that data accessible so users may benefit overall. But, traditional systems are often also zero sum games (as opposed to positive sum ones via web3), so it is not that surprising that [the most versatile substance on the planet was used to create a shield*](https://youtu.be/hI9GyhX7yHM?t=266).

Moreover, with javascript and modern browsers, any website visitor can run a node in the background; of course the onus is on the programmer to be able to effeciently run the node, without compromising user experience. Having said that, as technology improves and becomes increasingly accessible, more services can be run in the background; most are anyway, but to provide user tracking for the service provider (ie, the companies themselves) to profit off of your time and attention. This project aims to flip that around by rewarding the one who captured your attention and thereby tilting the balance slightly. Of course, this is only possible now with web3 and cool math (such as one way hashing, tries, proof logic, etc.), but now that it is possible, the question is how probable it is; and that question we can answer ourselves, for there's a permissionless entry, again made possible with math!

As such, this project extensively uses the techniques described by rollups and zero-knowledge proofs (and [merkle trees]()) to truly make nodes lightweight to be decentralised, and also keep the network secure with at least one keeper*.


## Optimistic Rollups

The basic idea of an *optimistic* rollup is that transactions are added to the chain constantly and if someone [read: anyone] finds a fraudulent transaction (double spend, etc.), they may submit a *proof* showing the *fraud* and the network deletes that branch entirely. Hence, this allows transactions on the layer to be almost instant (and *optimistic*) with a submission required only at the end. Effectively, you roll a bunch of transactions together and only submit the top most transaction [hash]. Building the *txn tree* is easy due to simply defined one way functions (such as hashing, concatenation, etc.). If you are somewhat familiar with the technology, you should read [this blog by Vitalik](https://vitalik.ca/general/2021/01/05/rollup.html); and if not, you should read and reread [that blog](https://vitalik.ca/general/2021/01/05/rollup.html) until you understand it.

For this project, the mining of `tP` tokens is done offline (ie, off chain, on the user's browser) as they read through stories. The mined tokens (and the branch) is stored as cookies in the user's browsers (compared to personally identifiable information by ad-based megacorporations). Once they reach an end of a story though, they may *mint* the story as an NFT (ERC-1155), and in doing so also publish the past transactions stored locally. The `transaction` word is used quite liberally here, but in essence, every interaction with the story (or the website) is considered to be a transation. As you pull the story's *threads*, and that act of you *spending* your time and attention to *unravel the [coloured] yarn* is considered a transaction and mines new `tP` tokens for the storyteller (or the yarn spinner).

Until you *purchase* an NFT (which is designed to give the storyteller extremely quick access to *real world funds*), a record of mined `tP` tokens is kept locally. Only when an NFT is *minted*, the prior batches are merged onto the main chain, somewhat git style*; ie, each unique visitor creates a persona to read stories which are considered separate branches, *merged* only when the persona creates a new ERC-1155 token.

### Current Constraints
> TODO


## Zero Knowledge Rollups

Like *optimistic* rollups rely on fraud proofs, ie, assume that the data is right, and if fraud is detected, posthumously alter the branch and invalidate the transactions since; these rely on *validity proofs* (again, [Vitalik's blog](https://vitalik.ca/general/2021/01/05/rollup.html) is a great resource). One way to think about this is that the *burden of proof* is on the action-performer or the sender, rather than a third party (or the receiver) to discover fraud. This view is why zero knowledge proofs are adopted into this project. **note** these are zero knowledge proofs since you would only submit the proof without any personally identifiable information to the chain.

As mentioned above, mining tokens for the network [read: storyteller] is optimistic, but only made real once some *real world funds* are brought into the network. This part of the process is where validity proofs are used, and indeed necessary. The idea is that the storyteller may not be in the position to pay a price for sharing their stories (think adolescents, whileblowers, prisoners, boomers even!), but since a price must be paid as every action must have (an equal and opposite) reaction, the burden is laid onto the one who the story is being shared with. In essence, the network *optimistically* (but locally) mines `tP` tokens which are *pushed* to and *merged* with the network only if a reader decides to mint a Non Fungible Token (for isn't every story unique?) for some amount of ERC-20 tokens, which serves two purposes - i. It provides the reciever (yarn spinner or the network itself) with *cashable* funds for their story, in effect a *payment* for reading their stories; ii. It provides a way for `tP` tokens to be pegged to a more universally accepted token (such as ETH itself) without having it list on exchanges, and thus without having stories being subjected to *market forces* (such as shorting, margin *bets*, quantitative analysis, etc.).

As such zk-SNARKs (zero-knowledge - Succinct Non interactive Argument of Knowledge) are used to provide a validity proof from the *reader*, ie, the person minting the NFT. This covers the gas required to mint an NFT, and also the gas required to mine new `tP` tokens, without the network bearing any cost. To continue the stories analogy, this can be considered the cost of *reading past* stories, priorly *free*. Of course, if no NFT is minted, ie, if no story is read such that the reader is moved enough to create a memento, then the network needs to upgrade or be shut down, and as such the branch (created as a cookies in-browser on unique visits, and user consent) is simply never submitted to the network, and the mined `tP` tokens are never merged with the network; ie, the network has no knowledge of new `tP` tokens being mined.

### Current Constraints
> TODO


## Merkle Roots

A lot of this optimisation and compression is possible due to clever math and data structures. Merkle Trees are used [extensively]() to store stories, and as such only the root of the tree needs to be submitted to the main chain, and the rest of the tree can be built as and when needed, by the entity who needs it. This only requires some data to be changed on chain and thus reduces the gas fees tremendously. For *optimistic mining*, a transaction occurs every link click [read: tree exploration] and the batch of transactions (of explorations) is submitted to the local chain once a new depth is reached in story [read: depth of merkle tree (the one storing the story) reached].

Each story read becomes a leaf in a local merkle tree formed to describe the local *branch*. The root of this tree thus formed, upon reading stories, locally is then submitted to the network for merging once a story is minted as a ERC-1155, as a personal memento. As the final push to the network uses validity proofs, the deeper this local tree (depth increases as more stories are read), the more data the proof takes*, and hence the more gas you pay to the network.

Having said that, the gas you pay to the network is only once, and to facilitate the mining of network [read: `tp`] tokens, ie, register your participation in the network, by rewarding the entity that drew you in. This one time fee is also quite cleverly low (by using merkle roots, stateless contracts, and rollups), so you can read multiple stories and only mint the one you like, and in doing so, convert your past time into monetary* assistance for the entitiy that consumed your time.

### Stateless Contracts

Another cool aspect of on chain dynmaics is that since all transactions are recorded (and publicly accessible) and every interaction with the chain is considered to be a transaction, we can *cleverly* store data as part of the transaction, ie, interacting with the network, such as calling a function in a smart contract, and then retrive it by decoding the (past) transaction that can be easily obtained by seeing the shared ledger. This manipulation of protocol schemes (and seeing problems in a different light) helps to reduce gas costs, and thus make the entire project scalable, for the experience is now more acccessible.

### Pull Requests
> _TODO_


## Voting and Amnesty
> DPoS TODO

One of the goals of this project is to provide assistance to storytellers because at the end of the day, we are all just stories (and some lucky ones get to be songs <3). Initially this assistance is monetary, either via `tP` tokens or minted stories (as NFTs, ERC-1155 tokens) for a certain price. However, a future provision can be made for voting where certain stories* may be so important that a community rally may be necessary for the story, or storyteller. This decentralised *voting* for *stakes* is something that needs more thought and as such is a future consideration.