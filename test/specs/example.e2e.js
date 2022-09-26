const assert = require('assert');

describe('Input field interaction when control key is pressed', () => {
	it('Control + Backspace', async () => {
		await browser.url(`http://localhost:3000/index.html`);

		const input = await $("#field");

		// type "a"
		await input.click();
		await input.keys("a");

		// hit control + backspace
		// * it works with ["Alt", "Backspace"]
		await input.keys(["Control", "Backspace"]);

		assert.strictEqual(await input.getValue(), "", "Input element value should be empty");
	});
});


