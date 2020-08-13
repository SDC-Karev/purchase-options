import React from 'react';
import { shallow } from 'enzyme';

import { BasicTooltip, GameTooltip } from '../client/components/Tooltips.jsx';
import results from './expectedResults.js'

let renderedApp;

describe('BasicTooltip Tests', () => {
  beforeAll((done) => {
    renderedApp = shallow(<BasicTooltip bundle={ results.bundleByGameId.exists[0] } />);
    done();
  });

  test('should have a single top level <h1> tag with className "game_purchase_wrapper"', (done) => {

    expect(renderedApp.length).toBe(1);
    expect(renderedApp.name()).toBe('h1');
    expect(renderedApp.hasClass('h1')).toBe(true);

    done();
  });

  test('<h1> tag should have two children: ["null[text]", "div.bundle_tooltip"]', (done) => {
    expect(renderedApp.children().length).toBe(2);

    expect(renderedApp.childAt(0).name()).toBe(null);

    expect(renderedApp.childAt(1).name()).toBe('div');
    expect(renderedApp.childAt(1).hasClass('bundle_tooltip')).toBe(true);

    done();
  });

  test('div.bundle_tooltip tag should have two children: ["null[text]", "div.bundle_tooltip_text"]', (done) => {
    const child = renderedApp.childAt(1);
    expect(child.children().length).toBe(2);

    expect(child.childAt(0).name()).toBe(null);

    expect(child.childAt(1).name()).toBe('div');
    expect(child.childAt(1).hasClass('bundle_tooltip_text')).toBe(true);

    done();
  });
});

describe('GameTooltip Tests', () => {
  beforeAll((done) => {
    renderedApp = shallow(<GameTooltip game={ results.bundleByGameId.exists[0].games[0] } />);
    done();
  });

  test('should have a single top level <a> tag with className "game_purchase_wrapper"', (done) => {

    expect(renderedApp.length).toBe(1);
    expect(renderedApp.name()).toBe('a');
    expect(renderedApp.hasClass('bundle_item')).toBe(true);

    done();
  });

  test('<a> tag should have one child: "div.bundle_game"', (done) => {
    expect(renderedApp.children().length).toBe(1);

    expect(renderedApp.childAt(0).name()).toBe('div');
    expect(renderedApp.childAt(0).hasClass('bundle_game')).toBe(true);

    done();
  });

  test('div.bundle_game tag should have two children: ["span", "div.game_tooltip"]', (done) => {
    const child = renderedApp.childAt(0);
    expect(child.children().length).toBe(2);

    expect(child.childAt(0).name()).toBe('span');

    expect(child.childAt(1).name()).toBe('div');
    expect(child.childAt(1).hasClass('game_tooltip')).toBe(true);

    done();
  });

  test('<span> tag should have one child: "img.bundle_img"', (done) => {
    const child = renderedApp.childAt(0).childAt(0);

    expect(child.children().length).toBe(1);

    expect(child.childAt(0).name()).toBe('img');
    expect(child.childAt(0).hasClass('bundle_img')).toBe(true);

    done();
  });

  test('div.game_tooltip tag should have one child: "div.game_tooltip_content"', (done) => {
    const child = renderedApp.childAt(0).childAt(1);

    expect(child.children().length).toBe(1);

    expect(child.childAt(0).name()).toBe('div');
    expect(child.childAt(0).hasClass('game_tooltip_content')).toBe(true);

    done();
  });

  test('div.game_tooltip_content tag should have 4 children: ["h3.game_tooltip_title", "p.game_tooltip_releasedate", "p.game_tooltip_body_content", "div.game_tooltip_tag_block"]', (done) => {
    const child = renderedApp.childAt(0).childAt(1).childAt(0);

    expect(child.children().length).toBe(4);

    expect(child.childAt(0).name()).toBe('h3');
    expect(child.childAt(0).hasClass('game_tooltip_title')).toBe(true);

    expect(child.childAt(1).name()).toBe('p');
    expect(child.childAt(1).hasClass('game_tooltip_releasedate')).toBe(true);

    expect(child.childAt(2).name()).toBe('p');
    expect(child.childAt(2).hasClass('game_tooltip_body_content')).toBe(true);

    expect(child.childAt(3).name()).toBe('div');
    expect(child.childAt(3).hasClass('game_tooltip_tag_block')).toBe(true);
    done();
  });


  test('div.game_tooltip_tag_block tag should have one child: "div.game_tooltip_tag"', (done) => {
    const child = renderedApp.childAt(0).childAt(1).childAt(0).childAt(3);


    expect(child.children().length).toBe(1);

    expect(child.childAt(0).name()).toBe('div');
    expect(child.childAt(0).hasClass('game_tooltip_tag')).toBe(true);

    done();
  });

});