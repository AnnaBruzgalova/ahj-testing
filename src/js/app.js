/* eslint-disable eol-last */

import InnFormWidget from './widget';

const container = document.querySelector('.container');
const form = new InnFormWidget(container);

form.bindToDOM();