module.exports = {
  apps: [{
    name: 'ai-ia-website',
    script: 'npm',
    args: 'start',
    cwd: '/home/ubuntu/ai-ia-website',
    env: {
      NODE_ENV: 'production',
      PORT: 3000
    },
    instances: 1,
    exec_mode: 'fork',
    watch: false,
    max_memory_restart: '1G',
    error_file: '/home/ubuntu/ai-ia-website/logs/err.log',
    out_file: '/home/ubuntu/ai-ia-website/logs/out.log',
    log_file: '/home/ubuntu/ai-ia-website/logs/combined.log',
    time: true
  }]
};