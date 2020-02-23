'use strict';

const e = React.createElement;

function LikeButton() {
  const [state, setState] = React.useState({
    liked: false
  });


  if (state.liked) {
    return 'You liked this.';
  }


  return e(
    'button',
    { onClick: () => setState({ liked: true }) },
    'Like'
  );
}

const domContainer = document.querySelector('#root');
ReactDOM.render(e(LikeButton), domContainer);