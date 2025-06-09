# funDragonGame-lwc


## **Project Summary: Dragon Game in LWC**

This game is a **mini arcade-style runner** built using Salesforce's **Lightning Web Components (LWC)** framework. It's designed to work entirely in the browser (client-side), making it ideal for showcasing interactivity in a Salesforce UI.


##  **Key Functional Parts and Their Purpose**

### 1. **HTML Template (UI Layout)**

* Creates a basic **game area** or container.
* Inside the container:

  * A **dragon** character sits on the left side.
  * A **fireball** moves from right to left across the screen.
* An instruction message tells the player to press the **spacebar** to jump.


### 2. **CSS (Styling and Animation)**

* Defines how the game looks: dimensions, positions, colors.
* Animates:

  * The **fireball** moving across the screen continuously.
  * The **dragon's jump** when the player presses the spacebar.
* Uses `@keyframes` and transitions to simulate smooth motion.



### 3. **JavaScript Controller (Game Logic)**

This is the heart of the game — it handles all user input, movement, sound, and collision detection.

#### 🔹 A. Event Listener

* Listens for `keydown` events.
* When the user presses the **spacebar**, it makes the dragon "jump."

#### 🔹 B. Jump Logic

* Adds a CSS class temporarily to trigger a jump animation.
* Prevents jumping again mid-air (basic double-jump prevention).
* Plays a **jump sound** (via a static resource).

#### 🔹 C. Collision Detection

* Runs continuously in a timed loop (`setInterval`).
* Checks if the dragon’s bounding box overlaps with the fireball’s.
* If collision is detected:

  * Plays a **hit sound**.
  * Stops the fireball animation.
  * Shows a **"Game Over" alert**.
  * **Auto-refreshes** the page to restart the game.

#### 🔹 D. Sound Effects

* `jump.mp3`: Plays when the dragon jumps.
* `hit.mp3`: Plays on collision with a fireball.
* Both sounds are included as Salesforce **Static Resources** and loaded using the standard `Audio` API.


## **Game Flow**

1. The player loads the component.
2. The fireball starts moving automatically.
3. The player presses **space** to jump and avoid fireballs.
4. If a fireball hits the dragon:

   * A hit sound plays.
   * An alert displays the game over message.
   * The page reloads to reset the game.



This game demonstrates:

* How to use **event listeners** in LWC.
* How to integrate **CSS animations**.
* How to perform **collision detection** using bounding boxes.
* How to use **static resources** like MP3 files in LWC.
* How to structure a simple game loop in a web component.


## Summary

Your Dragon Game is a lightweight, client-side game built with Lightning Web Components to simulate interactive logic similar to the Chrome Dino Game. It's a great example of combining **JavaScript logic**, **CSS animations**, and **Salesforce platform tools** to build something fun, visual, and functional.
