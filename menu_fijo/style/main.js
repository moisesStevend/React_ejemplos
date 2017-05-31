import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'class-name': {
    margin: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }],
    padding: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }],
    // max-width: 1000px;
  },
  'class-name div': {
    margin: [{ unit: 'px', value: 10 }, { unit: 'px', value: 50 }, { unit: 'px', value: 10 }, { unit: 'px', value: 50 }],
    textAlign: 'left'
  },
  'class-name div img': {
    width: [{ unit: 'px', value: 200 }]
  },
  'class-name nav': {
    background: '#3498db',
    // margin-top: 10px;
  },
  'class-name nav ul': {
    listStyle: 'none',
    overflow: 'hidden',
    // siempre va con float left
  },
  'class-name nav ul li': {
    float: 'left'
  },
  'class-name nav ul li a': {
    display: 'block',
    padding: [{ unit: 'px', value: 20 }, { unit: 'px', value: 20 }, { unit: 'px', value: 20 }, { unit: 'px', value: 20 }],
    color: '#fff',
    textDecoration: 'none'
  },
  'class-name nav ul li a:hover': {
    background: '#2980b9'
  },
  'menu-fixed': {
    position: 'fixed',
    zIndex: '1000',
    top: [{ unit: 'px', value: 0 }],
    width: [{ unit: '%H', value: 1 }],
    height: [{ unit: 'px', value: 80 }],
    boxShadow: [{ unit: 'px', value: 0 }, { unit: 'px', value: 4 }, { unit: 'px', value: 3 }, { unit: 'string', value: 'rgba(0,0,0,.5)' }]
  }
});
