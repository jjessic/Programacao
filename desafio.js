const aluno = "Jéssica";

const nota1 = 4;
const nota2 = 6;
const nota3 = 7;

const mediaFinal = (nota1 + nota2 + nota3) / 3;

if (mediaFinal >= 7) {
    console.log(
        `O aluno(a) ${aluno} foi aprovado com uma média final de: ${mediaFinal.toFixed(0)}`);
} else if (mediaFinal >= 5) {
    console.log(
        `O aluno(a) ${aluno} está de recuperação com uma média final de: ${mediaFinal.toFixed(0)}`);
} else {
    console.log(
        `O aluno(a) ${aluno} foi reprovado com uma média final de: ${mediaFinal.toFixed(0)}`);
}
