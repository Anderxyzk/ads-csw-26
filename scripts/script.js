import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const firebaseConfig = {

  apiKey: "AIzaSyBIRwEhvLQAAZvsR46QUmW7yEU0j2NXO1k",

  authDomain: "ads-csw-2026.firebaseapp.com",

  projectId: "ads-csw-2026",

  storageBucket: "ads-csw-2026.firebasestorage.app",

  messagingSenderId: "863915311521",

  appId: "1:863915311521:web:5f3b85fe2c6ef3a9ec0be0",

  measurementId: "G-8JF7SL986Q"

};



const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const form = document.getElementById("contatoForm");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const data = {
    nome: document.getElementById("name").value,
    telefone: document.getElementById("phone").value,
    email: document.getElementById("email").value,
    tipoCliente: document.getElementById("client-type").value,
    cpf: document.getElementById("cpf").value,
    cnpj: document.getElementById("cnpj").value,
    melhorHorario: document.getElementById("best-time").value,
    tipoServico: document.getElementById("service-type").value,
    descricao: document.getElementById("description").value,
    criadoEm: new Date()
  };

  try {
    await addDoc(collection(db, "contatos"), data);

    alert("Mensagem enviada com sucesso!");
    form.reset();

  } catch (error) {
    console.error("Erro:", error);
    alert("Erro ao enviar. Tente novamente.");
  }
});