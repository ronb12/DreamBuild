import { exec } from 'child_process';
import { promisify } from 'util';
import path from 'path';
import fs from 'fs-extra';

const execAsync = promisify(exec);

export class SecurityService {
  constructor() {
    this.blockedCommands = new Set([
      // System commands
      'rm -rf /',
      'rm -rf /*',
      'rm -rf ~',
      'rm -rf $HOME',
      'format',
      'fdisk',
      'mkfs',
      'dd if=/dev/urandom',
      
      // Network commands
      'curl -X POST',
      'wget --post-data',
      'nc -l',
      'netcat -l',
      'python -m http.server',
      'php -S',
      'ruby -run -e httpd',
      
      // Process commands
      'killall',
      'pkill',
      'kill -9',
      'kill -KILL',
      
      // File system dangerous commands
      'chmod 777',
      'chown -R',
      'chmod -R 777',
      'sudo rm',
      'sudo chmod',
      'sudo chown',
      
      // Package manager dangerous commands
      'npm uninstall -g',
      'npm install -g',
      'pip uninstall',
      'pip install --user',
      'yum remove',
      'apt remove',
      'apt purge',
      
      // Git dangerous commands
      'git reset --hard',
      'git clean -fd',
      'git push --force',
      'git push -f',
      
      // Environment variables
      'export PATH=',
      'unset PATH',
      'export HOME=',
      
      // Shell commands
      'exec',
      'eval',
      'source /dev/stdin',
      'bash <',
      'sh <',
      'zsh <',
      
      // File operations
      'mv /',
      'cp -r /',
      'ln -s /',
      'find / -delete',
      'find / -exec rm',
      
      // System information
      'cat /etc/passwd',
      'cat /etc/shadow',
      'cat /etc/hosts',
      'cat /proc/cpuinfo',
      'cat /proc/meminfo',
      'lsof',
      'netstat -an',
      'ss -tuln',
      
      // Process information
      'ps aux',
      'top',
      'htop',
      'systemctl',
      'service',
      
      // Network information
      'ifconfig',
      'ip addr',
      'ip route',
      'arp -a',
      
      // User management
      'useradd',
      'userdel',
      'usermod',
      'groupadd',
      'groupdel',
      'passwd',
      'su -',
      'sudo su',
      
      // System control
      'shutdown',
      'reboot',
      'halt',
      'poweroff',
      'systemctl stop',
      'systemctl start',
      'systemctl restart',
      'service stop',
      'service start',
      'service restart'
    ]);

    this.allowedCommands = new Set([
      // File operations (safe)
      'ls',
      'pwd',
      'cd',
      'mkdir',
      'touch',
      'cat',
      'head',
      'tail',
      'grep',
      'find',
      'which',
      'whereis',
      'file',
      'stat',
      'du',
      'df',
      'tree',
      
      // Text operations
      'echo',
      'printf',
      'sed',
      'awk',
      'sort',
      'uniq',
      'wc',
      'cut',
      'tr',
      'tee',
      'less',
      'more',
      
      // Git operations (safe)
      'git status',
      'git log',
      'git diff',
      'git show',
      'git branch',
      'git tag',
      'git remote',
      'git clone',
      'git pull',
      'git add',
      'git commit',
      'git push',
      'git checkout',
      'git merge',
      'git stash',
      'git fetch',
      
      // Node.js operations
      'npm install',
      'npm run',
      'npm test',
      'npm list',
      'npm outdated',
      'npm audit',
      'npm ci',
      'npm update',
      'node',
      'npx',
      
      // Python operations
      'python',
      'python3',
      'pip install',
      'pip list',
      'pip show',
      'pip freeze',
      'pipenv',
      'virtualenv',
      
      // Build tools
      'make',
      'cmake',
      'gcc',
      'g++',
      'javac',
      'java',
      'go build',
      'go run',
      'go test',
      'cargo build',
      'cargo run',
      'cargo test',
      
      // Package managers (safe operations)
      'yum list',
      'yum info',
      'yum search',
      'apt list',
      'apt show',
      'apt search',
      'brew list',
      'brew info',
      'brew search',
      
      // System info (safe)
      'date',
      'uptime',
      'whoami',
      'id',
      'env',
      'history',
      'alias',
      'type',
      'command',
      
      // Network (safe)
      'ping',
      'curl',
      'wget',
      'dig',
      'nslookup',
      'host',
      'traceroute',
      
      // Compression
      'tar',
      'zip',
      'unzip',
      'gzip',
      'gunzip',
      
      // Editors (read-only or safe)
      'nano',
      'vim',
      'emacs',
      'code',
      
      // Other safe commands
      'clear',
      'reset',
      'exit',
      'logout',
      'help',
      'man',
      'info'
    ]);

    this.maxCommandLength = 1000;
    this.maxArguments = 20;
    this.blockedPatterns = [
      /rm\s+-rf\s+[\/\*]/,
      /sudo\s+/,
      /su\s+/,
      /chmod\s+777/,
      /chown\s+-R/,
      /kill\s+-9/,
      /killall/,
      /pkill/,
      /format/,
      /fdisk/,
      /mkfs/,
      /dd\s+if=/,
      /export\s+PATH=/,
      /unset\s+PATH/,
      /exec\s+/,
      /eval\s+/,
      /source\s+\/dev\/stdin/,
      /bash\s+</,
      /sh\s+</,
      /zsh\s+</,
      /cat\s+\/etc\//,
      /cat\s+\/proc\//,
      /systemctl\s+(stop|start|restart|disable|enable)/,
      /service\s+(stop|start|restart)/,
      /shutdown/,
      /reboot/,
      /halt/,
      /poweroff/,
      /useradd/,
      /userdel/,
      /usermod/,
      /passwd/,
      /ifconfig/,
      /ip\s+addr/,
      /ip\s+route/,
      /lsof/,
      /netstat/,
      /ss\s+-tuln/,
      /ps\s+aux/,
      /top/,
      /htop/
    ];
  }

  isCommandAllowed(command) {
    if (!command || typeof command !== 'string') {
      return false;
    }

    // Check command length
    if (command.length > this.maxCommandLength) {
      console.log(`❌ Command blocked: too long (${command.length} chars)`);
      return false;
    }

    // Trim and normalize command
    const normalizedCommand = command.trim();
    
    // Check for blocked commands (exact match)
    if (this.blockedCommands.has(normalizedCommand)) {
      console.log(`❌ Command blocked: exact match (${normalizedCommand})`);
      return false;
    }

    // Check for blocked patterns
    for (const pattern of this.blockedPatterns) {
      if (pattern.test(normalizedCommand)) {
        console.log(`❌ Command blocked: pattern match (${normalizedCommand})`);
        return false;
      }
    }

    // Extract base command (first word)
    const baseCommand = normalizedCommand.split(' ')[0];
    
    // Check if base command is in allowed list
    if (this.allowedCommands.has(baseCommand)) {
      console.log(`✅ Command allowed: ${normalizedCommand}`);
      return true;
    }

    // Check for allowed command patterns
    const allowedPatterns = [
      /^git\s+/,
      /^npm\s+/,
      /^node\s+/,
      /^python\s+/,
      /^python3\s+/,
      /^pip\s+/,
      /^go\s+/,
      /^cargo\s+/,
      /^make\s+/,
      /^cmake\s+/,
      /^gcc\s+/,
      /^g\+\+\s+/,
      /^javac\s+/,
      /^java\s+/,
      /^curl\s+/,
      /^wget\s+/,
      /^tar\s+/,
      /^zip\s+/,
      /^unzip\s+/,
      /^gzip\s+/,
      /^gunzip\s+/,
      /^nano\s+/,
      /^vim\s+/,
      /^emacs\s+/,
      /^code\s+/,
      /^echo\s+/,
      /^printf\s+/,
      /^sed\s+/,
      /^awk\s+/,
      /^sort\s+/,
      /^uniq\s+/,
      /^wc\s+/,
      /^cut\s+/,
      /^tr\s+/,
      /^tee\s+/,
      /^less\s+/,
      /^more\s+/,
      /^head\s+/,
      /^tail\s+/,
      /^grep\s+/,
      /^find\s+/,
      /^which\s+/,
      /^whereis\s+/,
      /^file\s+/,
      /^stat\s+/,
      /^du\s+/,
      /^df\s+/,
      /^tree\s+/,
      /^date\s+/,
      /^uptime\s+/,
      /^whoami\s+/,
      /^id\s+/,
      /^env\s+/,
      /^history\s+/,
      /^alias\s+/,
      /^type\s+/,
      /^command\s+/,
      /^ping\s+/,
      /^dig\s+/,
      /^nslookup\s+/,
      /^host\s+/,
      /^traceroute\s+/,
      /^clear\s*/,
      /^reset\s*/,
      /^exit\s*/,
      /^logout\s*/,
      /^help\s*/,
      /^man\s+/,
      /^info\s+/
    ];

    for (const pattern of allowedPatterns) {
      if (pattern.test(normalizedCommand)) {
        console.log(`✅ Command allowed: pattern match (${normalizedCommand})`);
        return true;
      }
    }

    // Check argument count
    const args = normalizedCommand.split(' ').filter(arg => arg.length > 0);
    if (args.length > this.maxArguments) {
      console.log(`❌ Command blocked: too many arguments (${args.length})`);
      return false;
    }

    // Check for dangerous argument patterns
    const dangerousArgs = [
      '--force',
      '-f',
      '--recursive',
      '-r',
      '--all',
      '-a',
      '--yes',
      '-y',
      '--no-prompt',
      '--silent',
      '-s',
      '--quiet',
      '-q'
    ];

    for (const arg of args) {
      if (dangerousArgs.includes(arg)) {
        console.log(`❌ Command blocked: dangerous argument (${arg})`);
        return false;
      }
    }

    // Default: block unknown commands
    console.log(`❌ Command blocked: unknown command (${normalizedCommand})`);
    return false;
  }

  sanitizeInput(input) {
    if (!input || typeof input !== 'string') {
      return '';
    }

    // Remove control characters
    let sanitized = input.replace(/[\x00-\x1F\x7F]/g, '');
    
    // Limit length
    if (sanitized.length > this.maxCommandLength) {
      sanitized = sanitized.substring(0, this.maxCommandLength);
    }

    // Remove potentially dangerous characters
    sanitized = sanitized.replace(/[;&|`$(){}[\]\\]/g, '');

    return sanitized.trim();
  }

  validateFilePath(filePath) {
    if (!filePath || typeof filePath !== 'string') {
      return false;
    }

    // Normalize path
    const normalizedPath = path.normalize(filePath);
    
    // Check for path traversal attempts
    if (normalizedPath.includes('..') || normalizedPath.startsWith('/')) {
      return false;
    }

    // Check for dangerous file extensions
    const dangerousExtensions = ['.exe', '.bat', '.cmd', '.sh', '.ps1', '.py', '.js', '.php', '.rb', '.pl'];
    const ext = path.extname(normalizedPath).toLowerCase();
    
    if (dangerousExtensions.includes(ext)) {
      return false;
    }

    // Check path length
    if (normalizedPath.length > 500) {
      return false;
    }

    return true;
  }

  async auditCommand(command, userId, sessionId) {
    const audit = {
      timestamp: new Date().toISOString(),
      userId,
      sessionId,
      command: this.sanitizeInput(command),
      allowed: this.isCommandAllowed(command),
      ip: 'unknown', // Would be passed from request
      userAgent: 'DreamBuild Terminal'
    };

    // Log audit (in production, this would go to a secure log service)
    console.log('🔍 Command audit:', audit);

    return audit;
  }

  getSecurityStats() {
    return {
      blockedCommands: this.blockedCommands.size,
      allowedCommands: this.allowedCommands.size,
      blockedPatterns: this.blockedPatterns.length,
      maxCommandLength: this.maxCommandLength,
      maxArguments: this.maxArguments
    };
  }
}

