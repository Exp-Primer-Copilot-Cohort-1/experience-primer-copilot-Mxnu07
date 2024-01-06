
// Create web server
const express = require('express');
const app = express();

// Create api proxy
const { createProxyMiddleware } = require('http-proxy-middleware');
app.use('/api/comments', createProxyMiddleware({ target: 'http://localhost:4001', changeOrigin: true }));

// Start web server
app.listen(4000, () => {
  console.log('Listening on port 4000');
});
```
<br/>

### 3.3.5. Add a new comment
- **[comments/src/index.js](

