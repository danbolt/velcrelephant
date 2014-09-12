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
Velcrelephant is a tile-based platforming game. Tiles in this game will be explicit, and convey a consistent, blocky, form. Some examples of this style include [Alex Kidd in Miracle World](http://youtu.be/Rb9haoWT5js?t=19m34s), [Mr. Gimmick](http://youtu.be/zYcf2yUgblc?t=1m28s), and [Kirby's Adventure](http://youtu.be/rJXM4EPbPe0?t=3m19s). Games from the early [Kirby franchise](http://en.wikipedia.org/wiki/Kirby_(series)) will serve as a chief guide for atmospheric style.

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
sdasdsa
#### Receivng Damage
TODO

### Environments
### Baddies
### Playing Cooperatively

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
