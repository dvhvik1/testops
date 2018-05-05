var Config = {
  // Contents of this file will be send to the client
  "domain":     process.env.TESTOPS_SERVICE_HOST || '127.0.0.1',

  "serverip":   process.env.TESTOPS_SERVICE_HOST || '127.0.0.1',
  "serverport": process.env.TESTOPS_SERVICE_PORT || '8080',
  
  "clientport": (process.env.TESTOPS_SERVICE_PORT) ? '8000':'8080',
  "protocol":   'ws://',

  "heartbeattmo": 1000, // milliseconds 
  
  "wsclientopts": { reconnection: true, 
                    reconnectionDelay: 2000,
                    reconnectionAttempts: 100,
                    secure: false
                  }
};

module.exports = Config;
