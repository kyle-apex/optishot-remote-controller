import { Application } from 'spectron';
import path from 'path';
import assert from 'assert';
import ip from 'ip';

describe('Application launch', function () {
  this.timeout(15000);

  let app: Application;

  before(function () {
    app = new Application({
      path: path.join(__dirname, '../node_modules', '.bin', 'electron'),
      args: [path.join(__dirname, '..')],
    });
    return app.start();
  });

  after(function () {
    if (app && app.isRunning()) {
      return app.stop();
    }
  });

  it('shows an initial window', async () => {
    const windowCount = await app.client.getWindowCount();
    assert.strictEqual(windowCount, 1);
  });

  it('has "Optishot Remote Controller" title', async () => {
    const title = await app.client.getTitle();
    assert.strictEqual(title, 'Optishot Remote Controller');
  });

  it('displays text content', async () => {
    const element = await app.client.$('.secondary');
    const text = await element.getText();

    assert.strictEqual(text, 'Optishot!');
  });

  it("displays the user's ip address", async () => {
    const element = await app.client.$('.host');
    const text = await element.getText();
    assert.strictEqual(text, ip.address());
  });
});
