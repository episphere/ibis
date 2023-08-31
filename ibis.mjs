console.log(`ibis.mjs module loaded \n${Date()}`);

const loaded=Date()

async function getTestData(){
    let txt = await (await fetch('https://proxy.jalmeida.workers.dev/?https://ems-trials.org/riskevaluator/software/Windows_x86/v6/example.txt')).text()
    return txt.replace(/\\r/g,'')
}

async function txt2data(txt){
    txt = txt? txt : await getTestData()
    let dt = txt.split(/\\n/).map(r=>r.split(/\\t/))
    dt = dt.map(r=>r.map(c=>c))
    return dt
}

export {
    loaded,
    getTestData,
    txt2data
}