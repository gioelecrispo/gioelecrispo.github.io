export default {
    data: () => ({
    }),
    computed: {
    },
    methods: {
        hexToRgb(hex) {
            let bigint = parseInt(hex, 16);
            let r = (bigint >> 16) & 255;
            let g = (bigint >> 8) & 255;
            let b = bigint & 255;
            return r + "," + g + "," + b;
        }
    }
}
