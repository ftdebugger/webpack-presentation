import jquery from 'jquery';
import styles from './button.styl';

require(['./sum.js'], (sum) => {
    jquery('body').text(sum([1, 2, 3]));
});