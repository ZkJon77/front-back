```javascript
import { API_URL } from "../config";

// ============================================================
// CADASTRAR USUÁRIO
// POST /api/usuarios/cadastrar
// ============================================================

export async function cadastrar(nome, email, senha) {
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
}


// ============================================================
// LOGIN
// POST /api/usuarios/login
// ============================================================

export async function login(email, senha) {
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
}


// ============================================================
// LISTAR USUÁRIOS
// GET /api/usuarios
// Precisa de token
// ============================================================

export async function listarUsuarios(token) {
  const resposta = await fetch(`${API_URL}/api/usuarios`, {
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
}


// ============================================================
// EDITAR PERFIL
// PUT /api/usuarios/editar
// Precisa de token
// ============================================================

export async function editarPerfil(token, nome, email) {
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
}


// ============================================================
// DESATIVAR CONTA
// DELETE /api/usuarios/desativar
// Precisa de token
// ============================================================

export async function desativarConta(token) {
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
}
```
