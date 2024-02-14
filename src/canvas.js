import React, { useRef, useEffect } from 'react';

function Canvas() {
    const canvasRef = useRef(null);

    useEffect(() => {

        function draw(ctx, frameCount, x, y){
            ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
            ctx.fillStyle = 'pink';
            ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
            
            ctx.fillStyle = 'red';

            ctx.beginPath();
            var hc = getCordinatesOnHeartShape(x, y, 5*Math.sin(frameCount * 0.05)**2);
            for(var i = 0; i < hc.length; i++) {
                ctx.lineTo(hc[i].x, hc[i].y);
            }
            ctx.fill();
        }


        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let frameCount = 0;
        let animationFrameId;
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        let mouseX = 200;
        let mouseY = 100;

        canvas.addEventListener('mousemove', (event) => {
            mouseX = event.clientX;
            mouseY = event.clientY-200;
        }, false);
        
        const render = () => {
            frameCount++;
            draw(ctx, frameCount, mouseX, mouseY);
            animationFrameId = window.requestAnimationFrame(render);
          }
          render()
          
          return () => {
            window.cancelAnimationFrame(animationFrameId);
        }

    }, []);

    function getCordinatesOnHeartShape(x, y , r) {
        var cordinates = [];
        var pi = Math.PI;
        for(var t = 0; t <= 360; t++) {
            var tr = (t * pi)/180;
            cordinates[t] = {
                x : (x - (16 * r * Math.sin(tr) * Math.sin(tr) * Math.sin(tr))),
                y : (y -((13 * r * Math.cos(tr)) - (5 * r * Math.cos(2 * tr)) - (2 * r * Math.cos(3 * tr)) - (r * Math.cos(4 * tr))))
            };
        }
        return cordinates;
    }

    return (
        <canvas ref={canvasRef} />
    );
}

export default Canvas;