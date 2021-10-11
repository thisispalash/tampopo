# tampopo [dot] eth
> [Won't you](https://emptyyourmug.com/) please [unravel me](https://pullmythread.com/), [my love](https://tampopo.xyz) ?! \
>> Made as a part of [EthOnline 2021](https://web.archive.org/web/20210912132034/https://online.ethglobal.com/). \
>> Check out the submission [here](https://showcase.ethglobal.com/ethonline2021/tampopo-dot-eth)..

We can be anyone we want to be on the internet, so let's all be *singularly* real, in the hopes of abolishing from this world duality we may rise above and all be cubed !

Ever seen Harry Potter? There is a scene where Albus Dumbledore uses his wand to remove a memory from his mind to empty into the [Pensieve](https://harrypotter.fandom.com/wiki/Pensieve). Tampopo does exactly that, but with all the benefits of web3, ie, it incentivises _you_ to outpour your stories [read: empty your mugs] into the abyss [read: the network]. Relieve yourself of a traumatic memory or write some interesting fiction, and as the world _relives_ them with you, with the __magic of web3__, you will have __compensation__, potentially to improve the predicament that led you to empty your mug in the first place !

The other side of this [crypto] coin is pulling threads. The messages in bottles that you throw out into the ocean leave behind temporal breadcrumbs, those that the waves may obscure, but never hide (isn't the internet a magical place?!). ```pullmythread.com``` is the island where visitors may stumble on these bottles, coloured by their __mood__, and if they pick one up to look at closely, or open it to read the message, the breadcrumbs are activated and the breadmaker is rewarded !!

Finally, and to truly be web3, the network is designed to offer and enable genuine human connections, using the stories that we are, because at the end of the day, and our lives, isn't that all we are? The internet allows every human to avoid their second death, being forgotten, or at the very least prolong it to inhuman numbers; blockchain then further enables custom incentivisation for __public good behaviour__, one being supporting the network to maintain the incentives !!!

** note — the network can also be used as a global publishing platform or a global activism platform and use heavy yet public good oriented data analytics.. The current [future] plans are to bridge Wikipedia and orient Amnesty International, and also use OpenAI's gpt3 for cool stuff ranging from text2speech and speech2text to hard code nlp for semantic understanding. 

## The [technological] Revolution

At the end of the day, all of us are stories (some lucky one get to be songs); This project aims to connect stories and _web3_ by providing the space (in your time) for you to outpour your stories for the world. The world is filled with stories, which for one reason or another, are often silenced; no more! Web3 abstracts all entities into nodes, not caring if the node represents an idea, a machine, an organisation, or a person; Furthermore, these nodes can have their own economy, thereby, in some sense, enabling barter systems; or a global creative economy.

This project provides a platform for `users` to create `personas` and share stories as those `personas`; Upon story reads, the _storytellers_ are _rewarded_ by their reader's _attention_ (made tangible via `TP tokens`). The minting of fresh `TP` occurs upon persona registration (at `tampopo.eth`), story minting (at `emptyyourmug.com`), and on _thread pulling_ (at `pullmythread.com`). Furthermore, other tokens may be _streamed_ to mint `TP` at `<persona>.tampopo.eth`; which also forms the bridge to rest of web3 [read: DeFi].
> The choice to stay away from exchanges is a conscious one since I fear that the forces of the market will be too strong for the innocent threads strewn across the network

Web3 also brings forth, and indeed hyperboles, the transactional nature of the modern world; or more accurately, the causal nature of life itself - every action has a consequence (may or maynot be equal in nature, or value). The action-reaction(s) of this private* network are as follows;
- For `storytellers` - The action of writing, and publishing, a story awards you with a certain number of freshly minted `TP` tokens. Moreover, as readers read, more `TP` tokens are minted to your name (or if you be so kind, to the community).
- For `readers` - As you _stumble upon_ and read a story, freshly minted `TP` tokens are _streamed_ to the storyteller. Think of it as your attention and interest being converted to `TP` tokens by the _majik_ of web3.
- On _seeing colour_ - The two main ways to interact with the network is via `emptyyourmug.com` and `pullmythread.com`. However, you may also visit `tampopo.eth` where you may choose the _persona_ [read: colour] you want to read [read: see] and there is a cost associated with this choice, at some constant rate per click.
- Being _invited_ - A storyteller may also choose to invite you to read a story (or the world, by making it public) where the [cost] rate in _seeing colour_ is now the rate of minting fresh `TP` tokens.

## Usage Instructions

Network users [read: protocol participants] create __personas__ on the network, which is sugar for subdomains of __tampopo.eth__ using Ethereum Name Service. They can then read stories from or write stories to the network using the two network entry points :

*__emptyyourmug.com__* or __writing__ :: personas first select the mood of their stories and then outpour them in their browsers. Upon *minting*, the marked up story is compiled into a cascading binary [merkle] trie, which is further converted to an abstract computer generated image using EthBlockArt. The root hash and the trie image is minted as an ERC-721 token using lazy minting by the Rarible Protocol. The NFT metadata and image are stored on IPFS using free storage by web3.storage. Users may edit their published stories in the future by updating the trie and minting fresh ERC-1155 tokens to signal the update. This form of storytelling is inspired by *__alantrotter.com__*

*__pullmythread.com__* or __reading__ :: personas visit this website to stumble upon stories, getting engaged first with colour, then with the words. A pseudorandom story is displayed on visiting the webpage, with just three lines to read [read: threads to pull] — the mind, the body, and the soul. The colour of the webpage is identified programagically using a combination of story mood, recent activity, and network performance* (hue, saturation, and luminosity). The visitor is given only two actions — shuffle to another story, or pull a thread of the displayed history, or fantasy. The search for stories is powered by The Graph Network and mining and rollups is inspired by Privacy and Scaling group's (at The Ethereum Foundation) Semaphores (and vitalik's blogposts). The shuffling is inspired by *__stumbleupon.com__*

Finally, the network tokens are given value by maintaining an automated liquidity pool, using custom smart contracts. The core of any token to any token transfer is managed using Gas Station Network (in code, and spirit) and per link streaming is enabled by Superfluid Finance (again, in code, and spirit). Lastly, the persistent transactions in blockchain (sometimes to a fault, perhaps a necessary one) is [somewhat complexly] managed using a combination of The Ethereum Project's networks (namely, mainnet, ropsten, and görli). Much of the logic is written again from the ground up (after [re]designing from the top down), such as merkle trees, seed generation, multi signature schemes, etc.

### Network Information

tampopo consists of three networks - i. the default `mainchain` where all the action happens; ii. a `draftchain` for storytellers to get some feedback on their stories prior to publishing; and iii. a `hidechain` for permissioned access to a story, ie, invite-only story views for more sensitive content. Each chain uses a different Ethereum chain (such as `homestead`, `ropsten`, etc.) for their unique capabilities, as explained further;

**mainchain** This is the default chain for the network, running as a layer-2 chain on the main Ethereum Network (`mainnet`). A bunch of smart contracts help peg the value of `tP` tokens to ether, and thus real-world* value. Every public story that is publised to the network resides as a story hash on this chain.

**draftchain** This is the chain where the points are made up, and the rules don't matter. Effectively, it is the wild wild west, designed for more chaotic creations, as close to `main` conditions. As a result, implemented on Ethereum's `ropsten` network. The idea is to store drafts here, until it is ready to be published on the main network.

**hidechain** This is a Proof of Authority chain (as opposed to PoW (and maybe PoS) above) using the `görli-testnet` to enable DPoS voting, while separating the *voting** from funding. Effectively, the aim here is to form something like Twitter's [Communities](https://blog.twitter.com/en_us/topics/product/2021/testing-communities) because this network may also be used for whitsleblowing, or fighting injustice. In some [naive] way linking web3 and twitter, to give the _armchair_ activists some teeth, if you will.


### Contributing Guidelines
> read: participating with the network

The beautiful thing about open-source, is that you can *copypasta*. Moreover, code is a language; one to express ideas in (shamelessly stolen from [Lex Clips](https://www.youtube.com/c/LexClips)), and as such these are my ideas, hence there is no contributing, per se, permitted. Having said that, since the entire repository is under a [copyleft license](), you are free to fork it or even just copy individual lines from any file (*note:* the license mentions stating source of code, but also emphasises no liability, thereby making a sort of honour system possible; so, will you be honourable?).

Also, the most ideal, and indeed quickest for it is designed as so, way to *contribute* to the network, is to *participate* in it - either by [emptying your cup]() or by [filling it](). Either link helps mine `tP` tokens, which are made real by purchases of stories as memorablia of the time shared together (across space) [as an NFT [read: ERC-1155 multitoken]]. Of course, you may read stories for free without paying anything, but then I would be obliged to refer you to the honour code mentioned above.

In summary, you create a persona on either website (`emptyyourmug.com` || `pullmythread.com`) to share your stories or consume others' stories (respectively). Either of those activities mines fresh `tP` network tokens, which are made real* and consumable using some [web3 magic](). The idea behind the network is effectively an idea, that of existential dread - for aren't we all just stories at the end of it all? If so, why not become immortal together and scream out our [colourful] stories into the abyss*? This network is that abyss, with some effort to make sense of the chaos as well, of course.

**Branch Information**

This repository is split into four branches - [`takeoff`](), [`land`](), [`runway`](), and [`hangar`]();

- `takeoff` This branch is akin to the `release` branch, ie, where users or visitors stumble upon
- `land` This is akin to the `staging` branch, ie, where public users are invited to test new features
- `runway` This branch is akin to the `master` branch, ie, where devs are invited to test new features
- `hangar` This branch is akin to the `dev` branch, ie, where devs actually do the dev

**Future Considerations**
> _read_ BUIDL open source projects and release for the benefit of all !

- [ ] Ontologies and semantic _understanding_ by standarised formats
- [ ] `görli-testnet` Clique PoA for DPoS voting, _and_ assistance
- [ ] OpenAI conveniences; speech-to-text and vice versa, ...
- [ ] Colour theory; quicker _damping_ at `pullmythread.com`
- [ ] p2p serving, _state_ channels for _always on_ service
