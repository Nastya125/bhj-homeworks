const allTooltip = Array.from(document.querySelectorAll('a.has-tooltip'));


function activeTooltip () {

    const showTooltip = document.getElementsByClassName('tooltip_active')[0];

    event.preventDefault();

    if (showTooltip !== undefined) {
        showTooltip.classList.remove('tooltip_active');
         if (showTooltip.textContent == this.title) {
          return false;
        }
      }


    const tooltip = document.createElement('div');
    tooltip.classList.add('tooltip', 'tooltip_active');
    tooltip.textContent = this.getAttribute('title');

    const position = this.getBoundingClientRect();
    tooltip.style.top = position.bottom + 3 + 'px';
    tooltip.style.left = position.left + 'px';
    document.body.append(tooltip); 

}

    
        

for (element of allTooltip) {
    element.addEventListener('click', activeTooltip);
  }
