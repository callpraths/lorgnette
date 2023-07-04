import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';
import { LvMain } from '../src/LvMain.js';
import '../src/lv-main.js';

describe('LvMain', () => {
  it('has a default header "Hey there" and counter 5', async () => {
    const el = await fixture<LvMain>(html`<lv-main></lv-main>`);

    expect(el.header).to.equal('Hey there');
    expect(el.counter).to.equal(5);
  });

  it('increases the counter on button click', async () => {
    const el = await fixture<LvMain>(html`<lv-main></lv-main>`);
    el.shadowRoot!.querySelector('button')!.click();

    expect(el.counter).to.equal(6);
  });

  it('can override the header via attribute', async () => {
    const el = await fixture<LvMain>(html`<lv-main header="attribute header"></lv-main>`);

    expect(el.header).to.equal('attribute header');
  });

  it('passes the a11y audit', async () => {
    const el = await fixture<LvMain>(html`<lv-main></lv-main>`);

    await expect(el).shadowDom.to.be.accessible();
  });
});
