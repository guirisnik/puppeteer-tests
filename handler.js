const pup = require("puppeteer");


const ONE_SECOND = 1000;

const handler = async (url) => {
    const b = await pup.launch({ headless: false });
    const p = await b.newPage();

    await p.goto(url);
    
    await p.waitForSelector("#ipt_empresa");

    await p.focus("#ipt_empresa");
    await p.keyboard.type("CREDITAS");

    await p.focus("#j_username");
    await p.keyboard.type("ASOUZA5");

    await p.focus("#j_password");
    await p.keyboard.type("123Mud@r");

    await p.click("#btnLogin");

    await p.waitForNavigation({ timeout: 30 * ONE_SECOND });

    // try {
    //     await p.waitForSelector("body > div.introjs-tooltipReferenceLayer > div > div.introjs-tooltipbuttons > a.introjs-button.introjs-skipbutton");
    //     await p.click("body > div.introjs-tooltipReferenceLayer > div > div.introjs-tooltipbuttons > a.introjs-button.introjs-skipbutton");
    // } catch (error) {
    //     console.log(error);
    // }

    // await p.waitForSelector("#codigoempresa");
    // await p.select("#codigoempresa", "25771");

    // await p.waitForSelector("#id_produto");
    // await p.waitForSelector("#id_produto > optgroup > option");
    // await p.select("#id_produto", "9");

    // await p.screenshot({ path: "pic.png" });

    await b.close();
}

handler("https://www.planetun.mobi/");