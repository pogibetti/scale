import { JssStyle } from 'jss';

const styles: JssStyle = {
  card: {
    boxSizing: 'border-box',
    overflow: 'hidden',
    color: '#333',
    background: '#fff',
    border: '1px solid rgba(0, 0, 0, 0.1)',
    borderRadius: '4px',
    width: '400px',
    maxWidth: '550px',
    boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.12)',
  },
  card__body: {
    padding: '1rem',
  },
  card__header: {
    padding: '0.5rem 1rem',
    borderBottom: '1px solid, #dfdfdf',
    background: '#eee',
    fontSize: '0.8rem',
    '&::slotted(*)': {
      margin: 0,
    },
  },
  card__footer: {
    padding: '0.5rem 1rem',
    borderTop: '1px solid #dfdfdf',
    background: '#eee',
    fontSize: '0.8rem',
    '&::slotted(*)': {
      margin: 0,
    },
  },
  'card__img-top': {},
};

export default styles;
