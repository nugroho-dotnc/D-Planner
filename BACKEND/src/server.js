'use strict';

const app = require('./app');
const { PORT } = require('./config/env');

// Local development server
// if (require.main === module) {
//   app.listen(PORT, () => {
//     console.log(`🚀 Server running on port ${PORT} in ${process.env.NODE_ENV || 'development'} mode`);
//   });
// }

// Export for Vercel
module.exports = app;
