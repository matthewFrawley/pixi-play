import React, { useRef, useEffect } from 'react';
import { render } from 'react-dom';
import * as PIXI from 'pixi.js'
import './style.css';
// import pic from './matt.jpg'

function App () {

  const canvas = useRef(null);

  const pixiApp = useRef(
    new PIXI.Application({
      view: canvas.current,
      width: window.innerWidth,
      height: 400
    })
  )

  useEffect(()=> {
    addSpriteToStage()
  },[])

  const addSpriteToStage = () => {
    // Create Texture and then Sprite
    const texture = PIXI.Texture.from('./matt.jpg');
    let sprite = new PIXI.Sprite(texture);
    sprite.x = pixiApp.current.renderer.width /2;
    sprite.y = 200;
    sprite.anchor.x = 0.5; // Centers
    sprite.anchor.y = 0.5; 
    pixiApp.current.stage.addChild(sprite);
    animateSprite(sprite);
  }

  const animateSprite = (sprite) => {
    function animate() {
      sprite.rotation += 0.1;
    };
    pixiApp.current.ticker.add(animate);
  }

    return (
      <main>Hello I haven't started this yet!!
      
        <canvas ref={canvas} style={{width: '100vw', height: 400, border: '1px solid red'}} />
      
      </main>
    );
}

render(<App />, document.getElementById('root'));
