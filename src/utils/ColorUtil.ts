import chroma from 'chroma-js';

const ColorUtil = {
  hexToRgbA: (hex: string, alpha = 1) => {
    var c: any;
    if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
      c = hex.substring(1).split('');
      if (c.length == 3) {
        c = [c[0], c[0], c[1], c[1], c[2], c[2]];
      }
      c = '0x' + c.join('');
      return (
        'rgba(' +
        [(c >> 16) & 255, (c >> 8) & 255, c & 255].join(',') +
        ',' +
        alpha +
        ')'
      );
    }
    throw new Error('Bad Hex');
  },
  getColorByBgColor: (color: string) => {
    if (chroma.contrast(color, '#FFF') > 4.1) {
      return 'white';
    } else {
      return 'black';
    }
  },
  getRandom: () => {
    return (
      '#' + (0x1000000 + Math.random() * 0xffffff).toString(16).substr(1, 6)
    );
  },
};

export default ColorUtil;
