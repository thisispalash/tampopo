# Coloured Moods

The basic idea is to represent the mood of a story with a colour [read: hue]. Essentially we perceive reality filtered by our mood, which can be thought of as coloured goggles. This project flips that idea by making the reader aware of their goggles and then providing other goggles for their choosing. The majik of web3 makes this *economical* by incentivising network participation. Finally, and perhaps not so subtly, this also becomes a commentary on current affairs.

## Hue, Saturation, Luminosity

`hue` :: Typically digital colour is defined in terms of red, blue, and green or `rgb`, but it is hard to figure out as a human what the red, green, or blue values of your mood are. Humans are good at relative stuff, so you select the hue, saturation, and lightness of your mood; hue represents the overall colour of your mood (with 360 *degrees*), saturation is how strongly you feel your mood, and lightness becomes how upset or free you feel. In the background, this is converted to `rgb` which is then converted back into `hue`, so the network can define the other paramters [below].

`sat` :: *Saturation* defines how much of a colour [read: hue] there is. The network uses this to communicate the depth of the story [read: trie] explored, ie, as you get closer to the end of the story [read: closer to the root], the hue of the story gets more *saturated*. This serves to use the `hsla` as a design language to communicate information in novel ways, after all we are mining `$$$` out of *nothing*.

`lum` :: *Luminosity* (currently) is used to communicate the *value* of the story being read. Trivially, it is defined by the average mint price of the story in a ratio* to the number of story mints. Personally, this leads to leaderboards and [unhealthy, often] competition, which is what this project aims to avoid (by using *non fungible* tokens). The other view is of *lightness* which refers to the level of whiteness in the colour; white being all light and black being the absence of light. However, this view is adopted for the user, see `hue` above.

`alpha` :: *Opacity* defines how well you can see the colour, and as such this project uses it to show how well a story is doing, opaque being healthy, transparent, almost dying.. The *readers* have a choice to revive dying stories by minting them (could these be [horcruxes](https://harrypotter.fandom.com/wiki/Horcrux)?), but also do so by simply *taking the time* to read (or hear) the story.


## Colour Schemes
> TODO

### Complementary to Analogous
> choose a *delta* and set a *target* to reach analogous colours

### Mono, Di, Tri, Tetra Chromatic
> some stories need to be more customisable
