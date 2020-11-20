export default {
    data() {
        return {}
    },
    methods: {
        _dealPixel(rawData = '100%') {
            let newData = rawData + "";
            if (!newData.includes('px') && !newData.includes('%')) {
                newData = rawData + "px";
            }
            return newData
        }
    }
}