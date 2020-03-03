import React, { useRef, useEffect } from 'react';
import { render } from 'react-dom';
import * as PIXI from 'pixi.js'
import './style.css';
import pic from './'

function App () {

  const canvas = useRef(null);

  const pixiApp = useRef(
    new PIXI.Application({
      view: canvas.current,
      width: window.innerWidth,
      height: window.innerHeight
    })
  )

  useEffect(()=> {
    addSpriteToStage()
  },[])

  const addSpriteToStage = () => {
    // Create Texture and then Sprite
    const texture = PIXI.Texture.from('');
    const sprite = new PIXI.Sprite(texture);
    pixiApp.current.stage.addChild(sprite);
  }

    return (
      <main>Hello I haven't started this yet!!
      
        <canvas ref={canvas} style={{border: '1px solid red'}} />
      
      </main>
    );
}

render(<App />, document.getElementById('root'));
