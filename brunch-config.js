// See http://brunch.io for documentation.
module.exports = {
    files: {
      javascripts: {
        joinTo: {
          'static/vendor.js': /^(?!app)/,
          'static/app.js': /^app/
        }
      },
      stylesheets: {joinTo: 'static/app.css'}
    },

    
    plugins: {
      babel: {presets: ['latest', 'react']},
      terser: {mangle: false}
    },

    
    server: {
        hostname: '0.0.0.0'
    }
}