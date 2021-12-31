const infoIcons = document.querySelectorAll('i');

const timeout = {
  show: function(event) {
    this.timeoutID = setTimeout(function() {
      event.target.children[0].classList.add('show');
    }.bind(this), 250);
  },

  hide: function(event) {
    if (typeof this.timeoutID === 'number') {
      this.cancel();
    }
    event.target.children[0].classList.remove('show');
    this.timeoutID = undefined;
  },

  cancel: function() {
    clearTimeout(this.timeoutID);
  }
};

infoIcons.forEach(icon => {
  icon.addEventListener('mouseover', event => {
    timeout.show(event);
  });

  icon.addEventListener('mouseout', event => {
    timeout.hide(event);
  });
});