import { API_URL } from "../config";

// ============================================================
// CADASTRAR USUÁRIO
// POST /api/usuarios/cadastrar
// ============================================================

export async function cadastrar(nome, email, senha) {
  try {
    const resposta = await fetch(`${API_URL}/api/usuarios/cadastrar`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nome,
        email,
        senha,
      }),
    });

    const dados = await resposta.json();

    if (!resposta.ok) {
      throw new Error(
        dados.mensagem || "Não foi possível criar a conta."
      );
    }

    return dados;
  } catch (erro) {
    console.error("Erro ao cadastrar:", erro);

    if (erro.message === "Failed to fetch") {
      throw new Error(
        "Não foi possível conectar com a API. Verifique o servidor e o endereço da API."
      );
    }

    throw erro;
  }
}


// ============================================================
// LOGIN
// POST /api/usuarios/login
// ============================================================

export async function login(email, senha) {
  try {
    const resposta = await fetch(`${API_URL}/api/usuarios/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        senha,
      }),
    });

    const dados = await resposta.json();

    if (!resposta.ok) {
      throw new Error(
        dados.mensagem || "Não foi possível entrar."
      );
    }

    return dados;
  } catch (erro) {
    console.error("Erro no login:", erro);

    if (erro.message === "Failed to fetch") {
      throw new Error(
        "Não foi possível conectar com a API."
      );
    }

    throw erro;
  }
}


// ============================================================
// LISTAR USUÁRIOS
// GET /api/usuarios
// Precisa de token JWT
// ============================================================

export async function listarUsuarios(token) {
  try {
    const resposta = await fetch(`${API_URL}/api/usuarios`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const dados = await resposta.json();

    if (!resposta.ok) {
      throw new Error(
        dados.mensagem || "Não foi possível listar os usuários."
      );
    }

    return dados.usuarios;
  } catch (erro) {
    console.error("Erro ao listar usuários:", erro);

    if (erro.message === "Failed to fetch") {
      throw new Error(
        "Não foi possível conectar com a API."
      );
    }

    throw erro;
  }
}


// ============================================================
// EDITAR PERFIL
// PUT /api/usuarios/editar
// Precisa de token JWT
// ============================================================

export async function editarPerfil(token, nome, email) {
  try {
    const resposta = await fetch(`${API_URL}/api/usuarios/editar`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        nome,
        email,
      }),
    });

    const dados = await resposta.json();

    if (!resposta.ok) {
      throw new Error(
        dados.mensagem || "Não foi possível editar o perfil."
      );
    }

    return dados;
  } catch (erro) {
    console.error("Erro ao editar perfil:", erro);

    if (erro.message === "Failed to fetch") {
      throw new Error(
        "Não foi possível conectar com a API."
      );
    }

    throw erro;
  }
}


// ============================================================
// DESATIVAR CONTA
// DELETE /api/usuarios/desativar
// Precisa de token JWT
// ============================================================

export async function desativarConta(token) {
  try {
    const resposta = await fetch(
      `${API_URL}/api/usuarios/desativar`,
      {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const dados = await resposta.json();

    if (!resposta.ok) {
      throw new Error(
        dados.mensagem || "Não foi possível desativar a conta."
      );
    }

    return dados;
  } catch (erro) {
    console.error("Erro ao desativar conta:", erro);

    if (erro.message === "Failed to fetch") {
      throw new Error(
        "Não foi possível conectar com a API."
      );
    }

    throw erro;
  }
}
