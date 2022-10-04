const fs = require("fs");
jest.setTimeout(40 * 1000)

const dataInput = [
    "HCL Tech",
    "IBM"
];
describe("Extract Data", () => {
    dataInput.forEach(company =>{
    it("Get Company URL", async () => {
        await page.goto("https://www.google.com/");
        await page.type('input[name="q"]', company);
        await page.click(`[name='btnI']`);
        await page.waitForURL(await page.url());
        const d = company+","+(await page.url());
        writeLine(d)
      
      });   
    });
});
var logger = fs.createWriteStream('log.csv', {
  flags: 'a'
})
var writeLine = (line) => logger.write(`${line}\n`);