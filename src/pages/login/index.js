import "./index.css";
import { useState } from "react"
import Swal from "sweetalert2";
import usuarioService from "../../services/usuario-service";
// import { useLocation } from "react-router-dom";

function Login() {

    const [email, setEmail] = useState("admin@admin.com");
    const [senha, setSenha] = useState("123456");

    // const navigate = useLocation();


    const autenticar = () => {

        if(!email || !senha){
           Swal.fire({
            icon: 'error',
            text: "Os campos de e-mail e senha são obrigatórios, verifique!"
           });
        }

        // Aqui tenho que me comunicar com o backend.
        usuarioService
        .autenticar(email, senha)
        .then(response => {
            usuarioService.salvarToken(response.data.token);
            usuarioService.salvarUsuario(response.data.usuario);
            window.location = "/";
            // navigate('/')

       
        })
        .catch(erro => {
            // Fazer alguma coisa em caso de erro 
        });
    };

    return (
<div className="caixa-login">
    <div className="titulo-login">

      <h1>Login</h1>

    </div><br /><br />

    <form>
      <div className="grupo-email">
        <label for="email">E-mail</label>
        <input id="email" type="email" placeholder="Insira aqui seu E-mail" />

      </div><br /><br />


      <div className="grupo-senha">
        <label for="senha">Senha</label>
        <input id="senha" type="password" placeholder="Insira aqui sua senha" />

      </div>

      <div className="grupo-link">
        <a href="https://pt.wikihow.com/Se-Lembrar-de-Algo-que-Você-Esqueceu">Esqueci a Senha</a>
      </div> <br />

      <div className="botao-entrar">
        <button id="btn-entrar" onClick={autenticar} type="button" className="btn btn-light">Entrar</button>
      </div>

    </form>



    <script src="base.js"></script>
    <script src="login.js"></script>


    

  </div>
    );
}

export default Login;