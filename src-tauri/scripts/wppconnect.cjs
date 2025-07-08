const { create } = require('@wppconnect-team/wppconnect');

async function main() {
  const session = await create(/* …opções… */);
  session.once('qr', qr => {
    console.log(qr);
    process.exit(0);
  });
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});