console.log(`index.js loaded\n${Date()}`);


(async function(){
    ibis = await import('./ibis.mjs')
    //ibis = await import('https://episphere.github.io/ibis/ibis.mjs')
    document.getElementById('getTestDataButton').onclick=async function(){
        //document.getElementById('dataTextArea').value=await ibis.getTestData()
        document.getElementById('dataTextArea').value=JSON.stringify(await ibis.txt2data())
    }
    
})()

