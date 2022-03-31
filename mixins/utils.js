export default {
    data: () => ({
    }),
    computed: {
    },
    methods: {
        hexToRgb(hex) {
            if (hex[0] === '#') {
                hex = hex.slice(1)
            }
            let bigint = parseInt(hex, 16);
            let r = (bigint >> 16) & 255;
            let g = (bigint >> 8) & 255;
            let b = bigint & 255;
            return r + "," + g + "," + b;
        }
    }
}
