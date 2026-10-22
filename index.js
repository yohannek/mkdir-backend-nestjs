// Atividade Prática - Aula 01
// Módulo nativo 'os': exclusivo do Node.js
// (não existe no navegador).
const os = require("os");
console.log("Plataforma:", os.platform());
console.log("Memória total:", os.totalmem());
console.log("CPUs:", os.cpus().length);
