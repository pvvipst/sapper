const path = require('path')

module.exports = {
    webpack: {
        alias: {
            '@app': path.resolve(__dirname, 'src/app/'),
            '@assets': path.resolve(__dirname, 'src/assets/'),
            '@common': path.resolve(__dirname, 'src/common/'),
            '@': path.resolve(__dirname, 'src/'),
        }
    }
}

