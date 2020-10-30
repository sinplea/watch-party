/**
 * TODO: Write a custom event to handle when a user clicks outside of a set of
 * of specifed elements. Making this generic seems complicated, so I may
 * specify the exact set of elements of we want to check for.
 */
export function clickOutside(node) {

    const handleClick = event => {
      if (node && !node.contains(event.target) && !event.defaultPrevented) {
        console.log(event.target);
        console.log(node.contains(event.target));
      
        node.dispatchEvent(
          new CustomEvent('click_outside', {
            detail: event.target
          })
        )
      }
    }
  
      document.addEventListener('click', handleClick, true);
    
    return {
      destroy() {
        document.removeEventListener('click', handleClick, true);
      }
      }
  }