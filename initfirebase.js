import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Substitua o seguinte pela configuração do projeto Firebase do seu aplicativo
// Veja: https://firebase.google.com/docs/web/learn-more
const firebaseConfig = {
  // ...
};

// Inicialize o Firebase
const app = initializeApp(firebaseConfig);

// Inicialize o Firebase Authentication e obtenha uma referência ao serviço
const auth = getAuth(app);