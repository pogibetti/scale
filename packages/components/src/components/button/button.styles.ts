import { JssStyle } from 'jss';

const styles: JssStyle = {
  button: {
    position: 'relative',
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexShrink: 0,
    verticalAlign: 'middle',
    textAlign: 'center',
    cursor: 'pointer',
    userSelect: 'none',
    color: '#333',
    background: '#fff',
    border: '1px solid #000',
    padding: '0.25rem 1rem',
    lineHeight: '2rem',
    transition: 'all 0.2s ease-in-out',
    fontSize: '1rem',
    '&:hover, &.active': {
      color: '#fff',
      background: '#000',
      borderColor: '#000',
      transition: 'all 0.2s ease-in-out',
      textDecoration: 'none',
    },
    '&:not(.tabbing):focus': {
      outline: 0,
    },
    '&--disabled, &--disabled:hover': {
      background: '#fff',
      border: '1px solid #000',
      color: '#000',
      opacity: 0.5,
      cursor: 'not-allowed',
    },
  },
};

export default styles;
