// Q5 – Frontend Rush: Avoiding Callback Hell
// Five async stages: design -> build -> test -> deploy -> celebrate
// Each takes ~1s and logs its step.

// Callback-hell version (nested callbacks)
function design(cb){ setTimeout(()=>{ console.log('design done'); cb(); },1000); }
function build(cb){ setTimeout(()=>{ console.log('build done'); cb(); },1000); }
function test(cb){ setTimeout(()=>{ console.log('test done'); cb(); },1000); }
function deploy(cb){ setTimeout(()=>{ console.log('deploy done'); cb(); },1000); }
function celebrate(cb){ setTimeout(()=>{ console.log('celebrate 🎉'); cb && cb(); },1000); }

function runPipelineCallbackHell(){
  design(()=>{
    build(()=>{
      test(()=>{
        deploy(()=>{
          celebrate(()=>{
            console.log('Pipeline finished (callbacks)');
          });
        });
      });
    });
  });
}

// Async/await version for readability
function wait(ms){ return new Promise(r=> setTimeout(r, ms)); }

async function designAsync(){ await wait(1000); console.log('design done'); }
async function buildAsync(){ await wait(1000); console.log('build done'); }
async function testAsync(){ await wait(1000); console.log('test done'); }
async function deployAsync(){ await wait(1000); console.log('deploy done'); }
async function celebrateAsync(){ await wait(1000); console.log('celebrate 🎉'); }

async function runPipelineAsyncAwait(){
  try {
    await designAsync();
    await buildAsync();
    await testAsync();
    await deployAsync();
    await celebrateAsync();
    console.log('Pipeline finished (async/await)');
  } catch(err){
    console.error('Pipeline failed:', err);
  }
}

/*
Comment: async/await flattens nested flows into linear, readable code that resembles
synchronous code. Error handling is also simpler via try/catch instead of multiple callbacks.
*/
