import { $ } from 'backbone';
import Epoxy from 'backbone.epoxy';
import template from './header__social.jade';
import './header__social.scss';

export default Epoxy.View.extend({
  template,
  className: 'header__social',
  events: {
  },
  initialize() {
    this.renderTemplate();
    $.ajax({
      type: 'GET',
      url: '//api.github.com/repos/reportportal/reportportal',
      success: (data) => {
        console.dir(data.stargazers_count);
      },
    });
  },
});
