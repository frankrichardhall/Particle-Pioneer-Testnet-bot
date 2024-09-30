const colors = require('colors');

function displayHeader() {
  process.stdout.write('\x1Bc');
  console.log(colors.cyan('========================================'));
  console.log(colors.cyan('=     Particle Pioneer Testnet BOT     ='));
  console.log(colors.cyan('========================================'));
  console.log();
}

module.exports = displayHeader;
