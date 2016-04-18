import lodash from 'lodash';

export default function(arr) {
    return lodash.reduce(arr, (memo, value) => memo + value);
}