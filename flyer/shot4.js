const { chromium } = require('playwright');
(async()=>{const b=await chromium.launch();const p=await b.newPage({viewport:{width:1080,height:1350}});
await p.goto('file:///home/user/Hersey/flyer/flyer4.html');await p.waitForTimeout(1800);
await p.screenshot({path:'/home/user/Hersey/flyer/flyer-lovers-luxury-v4.png'});await b.close();})();
