let form = document.getElementById('formulario');


form.addEventListener('submit', function(e){

const cpfsExistentes = [123454678];

e.preventDefault();

let valido = true;


let nome = document.getElementById('nome').value;
let email = document.getElementById('email').value;
let telefone = document.getElementById('telefone').value;
 let cpf = document.getElementById('cpf').value;
 let idade = document.getElementById('idade').value;
 let cidade = document.getElementById('cidade').value;
 let horas = document.getElementById('horas').value;
 let motivo = document.getElementById('motivo').value;
 let termos = document.getElementById('termos').checked;
 let moradia = document.querySelector('input[name="moradia"]:checked');
 let quintal = document.querySelector('input[name="quintal"]:checked');
 let pet = document.querySelector('input[name="pet"]:checked');

 document.getElementById('erroNome').textContent = '';
 document.getElementById('erroEmail').textContent = '';
 document.getElementById('erroTelefone').textContent = '';
 document.getElementById('erroCPF').textContent = '';
 document.getElementById('erroIdade').textContent = '';
 document.getElementById('erroCidade').textContent = '';
 document.getElementById('erroMoradia').textContent = '';
 document.getElementById('erroQuintal').textContent = '';
 document.getElementById('erroHoras').textContent = '';
 document.getElementById('erroMotivo').textContent = '';
 document.getElementById('erroTermos').textContent = '';

if (nome.length < 3) {
 document.getElementById('erroNome').textContent = 'Nome deve ter pelo menos 3 caracteres';
valido = false;
}
i