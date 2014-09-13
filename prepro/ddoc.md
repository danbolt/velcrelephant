# Design Document for Initial Pitch
This document outlines a few thoughts Daniel has had towards Velcrelephant, and his ideas on design, scope, and implementation. This document is expected to change.

## Elevator
Since Rita's figuring out some plot ideas, Daniel's putting the minimum in for outlining. He'll refine this after Tuesday.

Oh no! `antagonist` has taken the `n∈𝛧; 3 ≤ n ≤ 5` magic `things` and `hid them at the end of the levels`. Help Velcrelephant and Hooky Hippo `save the day by getting to the end of the levels`. Walk, run, jump, and stick to whatever you can to `save day woo yay idk`!

## Attitudes and Audience
Velcrelephant will be a game that's cute. It should be enjoyable and relatable for a wide audience, but the hope of our game is for it to appeal to children.

Velcrelephant should not be a difficult game, but at the same time not be a game that disrespects the player's effort. While the player may need to think to solve a puzzle or concentrate to defeat a baddie, it should not be taxing. Our work will be acceptable if we do not bore the player, good if we do not stress the player, and ideal if we help the player relax.

Velcrelephant can be played by yourself, or cooperatively with another person. The content in the game should be suited for single player mode, but designed in a way that two players can go about the challenges together. Solving puzzles or fighting baddies should not feel like two people doing activities for one person. A child should be able to enjoy exploring Velcrelephant on their own, but also be able to have that experience with a friend, parent, or sibling.

## Gameplay
This section will cover gameplay for Velcrelephant.
### Overview
Velcrelephant is a tile-based platforming game. Tiles in this game will be explicit, and convey a consistent, blocky, form. Some examples of this style include [Alex Kidd in Miracle World](http://youtu.be/Rb9haoWT5js?t=19m34s), [Mr. Gimmick](http://youtu.be/zYcf2yUgblc?t=1m28s), and [Kirby's Adventure](http://youtu.be/rJXM4EPbPe0?t=3m19s). Games from the early [Kirby franchise](http://en.wikipedia.org/wiki/Kirby_(series) will serve as a chief guide for atmospheric style.

The objective while playing Velcrelephant will be to get to the end of the level. The player will directly control Velcrelephant with they keyboard or gamepad. They will have to run, jump over obstacles, and stick to objects using their velcro-based powers. The player will also have to avoid or defeat baddies that appear onscreen.

The player will have a "life bar", represented onscreen as hearts or some sort of container. Upon contact with a baddie the Player player will lose some quantity of life. If the player runs out of life, they will have to restart the level. The player will likely need to take five or six hits.
### Moveset
#### Summary
The moveset for Velcrelephant will require directional input (either digital or analog) and two digital button inputs. The directional input will allow the player to walk left and right. The first button will allow the player to jump, while the second button will allow the player to activate their velcro powers.
#### Hitbox
The player's hitbox will be a 1x1 tile, with actual size likely one or two pixels smaller. This is to make gameplay feel fair and allow the player to fit easily in 1 tile-high tunnels.
#### Movement
Moving the directional input left or right will horizontally move Velcrelephant. Acceleration/deacceleration will be instantaneous, as seen in Kirby's Adventure or [Solomon's Key](http://youtu.be/dsjDrsqlMKE?t=7m25s). This horizontal motion is the same if Velcrelephant is in midair (eg: jumping or falling).
#### Jumping
If the player presses the first input button, Velcrelephant will jump when on the ground. Jumping will make Velcrelephant move in a vertical arc, rising 1-2 tiles high before falling. The vertical motion should be parabolic, akin to gravity seen in other platformers.

Pressing and holding the jump button for longer/shorter periods of time should not affect jumping time. Or, jumping should be seen as a one-off action.
#### Velcro Powers
Pressing the second input button will activate/deactivate Velcrelephant's Velcro Powers. This could either be a toggle or "hold" technique (or both, determined by a player setting). This can only be done when Velcrelephant is resting on the ground. If Velcrelephant is walking when they activates their Velcro Powers, Velcrelephant will stop walking, and the player will need to release and press left/right once again to continue walking.

`diagram?`

Upon activating Velco powers, things will stick to Velcrelephant! The only things that will stick to Velcrelephant are specific **living objects**, which will be defined later. Sticking means any living objects that are touching Velcrelephant's hitbox will be attached, and act as though they are part of the same body.

`diagram`

If Velcrelephant is touching the ground, jumping, or falling, pressing left and right will move the attached objects along with Velcrelephant. Velcrelephant can jump off the ground while attached. If Velcrelephant is suspended, or attached to an object below, then moving left, right, or jumping will not do anything. This may require addressing specific edge cases when implementing.

Velcrelephant can still receive damage when attached to objects. If Velcrelephant is attacked or damaged while stuck to something, the Velcro Powers will deactivate.

#### Receivng Damage
`TODO`

### Environments
#### Scrolling
Environments will be levels commonly seen in platform video games, using the mentioned blocky tile style. As Velcrelephant moves across the level, the game's camera will scroll, keeping Velcrelephant in the inner 50% (subject to change) of the screen. The screen will only scroll in one direction at a time, as seen in games like [Mega Man 2](YOUTUBE) and Alex Kidd in Miracle World.

`object type diagram`

#### Object Types
Things in the environments can be dividied into three varieties, Background Objects, Static Objects, and Living Objects. Each will have a specific role, purpose, and visual style.
##### Background Objects
Background Objects make up things that the player cannot interact with, or don't interfere with the game logic. These are typically aesthetic things that contribute to the taste and texture of the world. Velcrelephant cannot interact with these things, and they shouldn't attempt to take the player's attention. Living Objects can pass over these as though they are not there.
##### Still Objects
Still Objects can be thought of as "static tiles" or the game's foreground. This will generally be tiles that make up the floor, walls, and platforms. They do not move, and have non-distracting animations, if any at all. Living Objects should not be occupy the same space as background objects.
##### Living Objects
Living Objects can be seen as the "game entities" of the world. They move, animate, and can be seen like actors on a stage. Living Objects may or may not overlap with one another. Examples include Velcrelepaht, Hooky Hippo, moving platforms, baddies, blocks, dropped items, etc.

### Baddies
`TODO`

### Playing Cooperatively
A second player can play as Hooky Hippo. KEEP WRITING

## Content Scope

## Visual Style
### Colour and Texture

### Depictions of Violence

## Audio

## Conveying of Information

## Implementation
### Phaser Library
### Navigation (Screen State)
### AABB Entities
### Tile Layer
### Particle Effects
