console.log(`index.js loaded\n${Date()}`);


(async function(){
    ibis = await import('./ibis.mjs')
    //ibis = await import('https://episphere.github.io/ibis/ibis.mjs')
    
})()

